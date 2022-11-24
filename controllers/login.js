const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.json({ status: "error", error: "Por favor introduce tu correo y contraseña" });
    
    else if(email == "ceferrer1@urbe.edu.ve" || email == "aegil@urbe.edu.ve" || email == "jdvillasmil1@urbe.edu.ve" || email == "grlopez@urbe.edu.ve" || email == "msparra@urbe.edu.ve"){
        db.query('SELECT * FROM administrador WHERE email = ?', [email], async (Err2, result2) => {
            if(Err2) throw Err2;
            if(!result2.length || !await bcrypt.compare(password, result2[0].password))return res.json({ status: "error", error: "Correo electronico o contraseña incorrecta" })
            else{
                console.log(password)
                const token = jwt.sign( {id: result2[0].id} , process.env.JWT_SECRET , {
                    expiresIn: process.env.JWT_EXPIRES,
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("userRegistered2", token, cookieOptions);
                 /*Mostrar nombre de administrador*/
                const [_] = result2;
                console.log('_: ', _);
                const {nombre_usuario_adm} = _;
                const data = {  status: "success2", success2: "El administrador ha iniciado sesion con exito", nombre_usuario_adm }
                return res.json(data);
            }
        })
    }

   
    // Busca al cliente
    else {
        console.log(email)
        db.query('SELECT * FROM cliente WHERE email = ?', [email], async (Err, result) => {
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
                 /*Mostrar nombre de usuario*/
                const [_] = result;
                const {username} = _;
                const data = { status: "success", success: "El usuario ha iniciado sesion con exito", username }
                return res.json(data);
            }
        })
    }
   
}

module.exports = login;










