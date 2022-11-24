const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const forgotPassword = async (req, res) => {
    const {password: Npassword } = req.body
    const {cedula} = req.body;
    db.query('SELECT * FROM cliente WHERE cedula = ?', [cedula], async (err5, result5) => {
        if (err5) throw err5;
        if(!result5.length) return res.json({ status: "error", error: "Este no es su cedula, coloque su cedula" })
        else{
            const password = await bcrypt.hash(Npassword, 8);
            if(!Npassword) return res.json({status: "error", error: "Por favor introduce tu nueva contraseña"});
            else {
                db.query(`UPDATE cliente SET password = "${password}" WHERE cedula = "${cedula}"`, [password], async (err6, result6) =>{
                    if (err6) throw err6;
                    return res.json({ status: "success", success: "La clave ha sido actualizada" })
                    
                }) 
            }
        }
    })
  
}


module.exports = forgotPassword;

