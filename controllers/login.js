const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.json({ status: "error", error: "Por favor introduce tu correo y contraseña" });
    else {
        console.log(email)
        db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (Err, result) => {
            if(Err) throw Err;
            if(!result.length || !await bcrypt.compare(password, result[0].password))return res.json({ status: "error", error: "Correo electronico o contraseña incorrecta" })
            else{
                console.log(password)
                const token = jwt.sign( {id: result[0].id} , process.env.JWT_SECRET , {
                    expiresIn: process.env.JWT_EXPIRES,
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("userRegistered", token, cookieOptions);
                return res.json({ status: "success", success: "El usuario ha iniciado sesion con exito" });
            }
        })
    }
}

module.exports = login;