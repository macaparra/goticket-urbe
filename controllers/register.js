
const db = require("../routes/db-config");
const bycrypt = require("bcryptjs"); // Sirve para cifrar la password

// Enviamos los registros a la base de datos una vez hayan sido autenticados

const register = async (req, res) => {
    const { email, password: Npassword } = req.body
    const {username} = req.body;
    const {cedula} = req.body;
    const {telefono} = req.body;
    if(!email || !Npassword) return res.json({ status: "error", error: "Por favor introduce tu correo y contraseña" });
    else{
        // Validacion de email
        db.query('SELECT email FROM cliente WHERE email = ?' , [email], async (err, result) => {
            if (err) throw err;
            if(result[0]) return res.json({ status: "error", error: "Este email ya ha sido registrado" })
            // Validacion de username
            db.query('SELECT username FROM cliente WHERE username = ?' , [username], async (err2, result2) => {
                if (err2) throw err2;
                if(result2[0]) return res.json({ status: "error", error: "Este usuario ya ha sido registrado" })
                // Validacion de cedula
                db.query('SELECT cedula FROM cliente WHERE cedula = ?', [cedula], async (err3, result3) => {
                    if (err3) throw err3;
                    if(result3[0]) return res.json({ status: "error", error: "Esta cédula ya ha sido registrada" })
                    // Validacion de telefono
                    db.query('SELECT telefono FROM cliente WHERE telefono = ?', [telefono], async (err4, result4) =>{
                        if (err4) throw err4;
                        if(result4[0]) return res.json({ status: "error", error: "Esta telefono ya ha sido registrada" })
                        else{
                            const password = await bycrypt.hash(Npassword, 8);
                            const {ciudad} = req.body;
                            const {codetelefono} = req.body;
                            const {direccion} = req.body;
                            const {fnacimiento} = req.body;
                            const {ncedula} = req.body;
                            const {gender} = req.body;
                            db.query('INSERT INTO cliente SET ?', { email: email, password: password, username: username,ciudad: ciudad, cedula: cedula, direccion: direccion, telefono: telefono, codetelefono: codetelefono ,fnacimiento: fnacimiento, ncedula: ncedula, gender: gender}, (error, results) => {
                                if (error) throw error;
                                return res.json({ status: "success", success: "El usuario ha sido registrado satisfactoriamente" })
                            })
                            
                            // CODIGO PARA AGREGAR ADMIN
                            // db.query('INSERT INTO administrador SET ?', { email: email, password: password}, (error, results) => {
                            //     if (error) throw error;
                            //     return res.json({ status: "success", success: "El usuario ha sido registrado satisfactoriamente" })
                            // })
                        }
                    })
                } )
            })
        })
        
    }
}

module.exports = register;