const db = require("../routes/db-config");
//import { transporter } from "../controllers/mailer";
const transporter = require('../controllers/mailer');
const jwt = require("jsonwebtoken");


const restorep = async (req, res) => {
    const {email} = req.body;
    db.query('SELECT * FROM cliente WHERE email = ?', [email], async (err5, result5) => {
        if (err5) throw err5;
        if(!result5.length) return res.json({ status: "error", error: "Este email no ha sido registrado, por favor registrese en el sistema" })
        else{
            const token = jwt.sign( {id: result5[0].id} , process.env.JWT_SECRET , {
                expiresIn: '10m',
            })
            //const verificationLink = `http://localhost:4000/changePassword/${token}`
            const verificationLink = `http://localhost:4000/forgotPassword`;
            // send mail with defined transport object
            await transporter.sendMail({
                
                from: '"Recuperación de contraseña Goticket" <goticketve@gmail.com>', // sender address
                to: `${email}"`, // list of receivers
                subject: "Recuperación de Contraseña", // Subject line
                text: "A continuación podrás observar el link de recuperación de contraseña !!", // plain text body
                html: `
                <h3>Somos la administracion de Goticket, a continuación podras observar el link para recuperar contraseña</h3>
                <a href="${verificationLink}">${verificationLink}</a>` , // html body

            });
            return res.json({ status: "success", success: "El email ha sido enviado exitosamente" });
            
        }
    })
}



module.exports = restorep;