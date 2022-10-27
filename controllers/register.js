
const db = require("../routes/db-config");
const bycrypt = require("bcryptjs"); // Sirve para cifrar la password

// Enviamos los registros a la base de datos una vez hayan sido autenticados

const register = async (req, res) => {
    const { email, password: Npassword } = req.body
    if(!email || !Npassword) return res.json({ status: "error", error: "Por favor introduce tu correo y contraseña" });
    else{
        db.query('SELECT email FROM usuarios WHERE email = ?' , [email], async (err, result) => {
            if (err) throw err;
            if(result[0]) return res.json({ status: "error", error: "Este email ya ha sido registrado" })
            else{
                const password = await bycrypt.hash(Npassword, 8);
                db.query('INSERT INTO usuarios SET ?', { email: email, password: password }, (error, results) => {
                    if (error) throw error;
                    return res.json({ status: "success", success: "El usuario ha sido registrado satisfactoriamente" })
                })
            }


        })
    }
}

module.exports = register;