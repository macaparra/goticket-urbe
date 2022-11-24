const express = require("express");
const router = express.Router();
const db = require("./db-config");
const loggedInadmin = require("../controllers/loggedInadmin");
const bycrypt = require("bcryptjs"); 
const transporter = require('../controllers/mailer');

router.get("/", loggedInadmin ,function(req, res, next){

	res.render('editaradmin');

});

router.post("/action", async function(req, res, next){
    var action = req.body.action;

    if(action == 'fetch')
	{
        
		var query = "SELECT * FROM administrador ORDER BY id DESC";

		db.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

    if (action == 'Agregar'){
		// const username = req.body.username;
		// const cedula = req.body.cedula;
		// const nacionalidad = req.body.nacionalidad
		// const fnacimiento = req.body.fnacimiento;
		// const telefono = req.body.telefono;
		// const direccion  = req.body.direccion;
		// const gender = req.body.gender;
		// const ciudad = req.body.cedula;
		// const { email, password: Npassword } = req.body;
		// const password = await bycrypt.hash(Npassword, 8);

		const { email, password: Npassword } = req.body
        const {nombre_usuario_adm} = req.body;
        const {cedula_adm} = req.body;
        const {telefono_adm} = req.body;
		const password = await bycrypt.hash(Npassword, 8);
        const {fecha_nacimiento_adm} = req.body;

		db.query('SELECT email FROM administrador WHERE email = ?' , [email], async (err, result) => {
			if (err) throw err;
            if(result[0]) return res.json({ status: "error", error: "El email ingresado ya se encuentra en el sistema" })
            // Validacion de username
			db.query('SELECT nombre_usuario_adm FROM administrador WHERE nombre_usuario_adm = ?' , [nombre_usuario_adm], async (err2, result2) =>{
				if (err2) throw err2;
                if(result2[0]) return res.json({ status: "error", error: "El usuario ingresado ya se encuentra en el sistema" })
				// Validacion de cedula
                db.query('SELECT cedula_adm FROM administrador WHERE cedula_adm = ?', [cedula_adm], async (err3, result3) =>{
					if (err3) throw err3;
                    if(result3[0]) return res.json({status: "error", error: "La cédula ingresada ya se encuentra en el sistema"})
					// Validacion de telefono
                    db.query('SELECT telefono_adm FROM administrador WHERE telefono_adm = ?', [telefono_adm], async (err4, result4) =>{
						if (err4) throw err4;
                        if(result4[0]) return res.json({ status: "error", error: "El telefono ingresado ya ha sido registrado" })
						else {
							db.query('INSERT INTO administrador SET ?', { email: email, password: password, nombre_usuario_adm: nombre_usuario_adm, cedula_adm: cedula_adm, telefono_adm: telefono_adm, fecha_nacimiento_adm: fecha_nacimiento_adm}, async function(error, data){
                                const verificationLink = `https://goticket-urbe-production.up.railway.app/login`;
                                await transporter.sendMail({
                
                                    from: '"Bienvenido a bordo" <goticketve@gmail.com>', // sender address
                                    to: `${email}"`, // list of receivers
                                    subject: "Querido Administrador", // Subject line
                                    text: "A continuación podrás observar el link de recuperación de contraseña !!", // plain text body
                                    html: `
                                    <h1>Bienvenido a continuación podras observar tus datos administrador</h1>
                                    <h3>Correo: "${email}"</h3>
                                    <h3>Contraseña: "${Npassword}"</h3>
                                    <a href="${verificationLink}">${verificationLink}</a>
                                    ` , // html body
                    
                                });
								res.json({
									status: "success", success: "Registro realizado exitosamente"
								});
							});
						};
					});
				});
			});
		});

	};

    if(action == 'fetch_single'){
		const {id} = req.body;
		const query = `SELECT * FROM administrador WHERE id = "${id}"`;
		
		db.query(query, function (error, data){
			res.json(data[0]);
		});
	}

    if(action == 'Editar'){

		const {id} = req.body;
		const { email, password: Npassword } = req.body
        const {nombre_usuario_adm} = req.body;
        const {cedula_adm} = req.body;
        const {telefono_adm} = req.body;
		//const password = await bycrypt.hash(Npassword, 8);
        const {fecha_nacimiento_adm} = req.body;


		// db.query(`UPDATE cliente SET password = "${password}", SET cedula = "${cedula}", SET email = "${email}" ,SET username = "${username}", SET telefono = "${telefono}", SET ciudad = "${ciudad}", SET direccion = "${direccion}", SET fnacimiento = "${fnacimiento}", SET nacionalidad = "${nacionalidad}" ,SET gender = "${gender}" WHERE id = "${id}"`, [email], [password], [username] , [cedula] , async  function(error, data){
		// 	res.json({
		// 		message: 'Información Editada'
		// 	});
		// });
		
		// const query = `
		// UPDATE cliente 
		// SET email = "${email}", 
		// username = "${username}", 
		// cedula = "${cedula}", 
		// gender = "${gender}",
		// telefono = "${telefono}",
		// password = "${password}",
		// ciudad = "${ciudad}",
		// direccion = "${direccion}",
		// fnacimiento = "${fnacimiento}",
		// nacionalidad = "${nacionalidad}"
		// WHERE id = "${id}"
		// `;

		db.query(`
		UPDATE administrador 
		SET email = "${email}", 
		nombre_usuario_adm = "${nombre_usuario_adm}", 
		cedula_adm = "${cedula_adm}", 
		telefono_adm = "${telefono_adm}",
		fecha_nacimiento_adm = "${fecha_nacimiento_adm}"
		WHERE id = "${id}"
		`, function(error, data){
			res.json({
				status: "success", success: "Informacion editada exitosamente"
			})
		});

	}

    if(action == 'delete'){
		const {id} = req.body;
		var query = `DELETE FROM administrador WHERE id = "${id}"`;
		
		db.query(query, function(error, data){
			res.json({
				message : 'Registro Eliminado exitosamente'
			});
		});
	}
    
})




module.exports = router;
