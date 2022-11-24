const express = require("express");
const router = express.Router();
const db = require("./db-config");
const loggedInadmin = require("../controllers/loggedInadmin");
const bycrypt = require("bcryptjs"); 

router.get("/", loggedInadmin ,function(req, res, next){

	res.render('editarcliente');

});

router.post("/action", async function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM cliente ORDER BY id DESC";

		db.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}
	if (action == 'Agregar'){
		// const username = req.body.username;
		// const cedula = req.body.cedula;
		// const ncedula = req.body.ncedula
		// const fnacimiento = req.body.fnacimiento;
		// const telefono = req.body.telefono;
		// const direccion  = req.body.direccion;
		// const gender = req.body.gender;
		// const ciudad = req.body.cedula;
		// const { email, password: Npassword } = req.body;
		// const password = await bycrypt.hash(Npassword, 8);

		const { email, password: Npassword } = req.body
        const {username} = req.body;
        const {cedula} = req.body;
		const {codetelefono} = req.body;
        const {telefono} = req.body;
		const password = await bycrypt.hash(Npassword, 8);
        const {ciudad} = req.body;
        const {direccion} = req.body;
        const {fnacimiento} = req.body;
        const {ncedula} = req.body;
        const {gender} = req.body;

		db.query('SELECT email FROM cliente WHERE email = ?' , [email], async (err, result) => {
			if (err) throw err;
            if(result[0]) return res.json({ status: "error", error: "El email ingresado ya se encuentra en el sistema" })
            // Validacion de username
			db.query('SELECT username FROM cliente WHERE username = ?' , [username], async (err2, result2) =>{
				if (err2) throw err2;
                if(result2[0]) return res.json({ status: "error", error: "El usuario ingresado ya se encuentra en el sistema" })
				// Validacion de cedula
                db.query('SELECT cedula FROM cliente WHERE cedula = ?', [cedula], async (err3, result3) =>{
					if (err3) throw err3;
                    if(result3[0]) return res.json({status: "error", error: "La cédula ingresada ya se encuentra en el sistema"})
					// Validacion de telefono
                    db.query('SELECT telefono FROM cliente WHERE telefono = ?', [telefono], async (err4, result4) =>{
						if (err4) throw err4;
                        if(result4[0]) return res.json({ status: "error", error: "El telefono ingresado ya ha sido registrado" })
						else {
							db.query('INSERT INTO cliente SET ?', { email: email, password: password, username: username, ciudad: ciudad, cedula: cedula, direccion: direccion, telefono: telefono, fnacimiento: fnacimiento, ncedula: ncedula, gender: gender, codetelefono: codetelefono}, function(error, data){
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
		const query = `SELECT * FROM cliente WHERE id = "${id}"`;
		
		db.query(query, function (error, data){
			res.json(data[0]);
		});
	}

	if(action == 'Editar'){

		const {id} = req.body;
		const { email } = req.body;
		//const {password: Npassword} = req.body
        const {username} = req.body;
        const {cedula} = req.body;
		const {codetelefono} = req.body;
        const {telefono} = req.body;
		//const password = await bycrypt.hash(Npassword, 8);
        const {ciudad} = req.body;
        const {direccion} = req.body;
        const {fnacimiento} = req.body;
        const {ncedula} = req.body;
        const {gender} = req.body;

		// db.query(`UPDATE cliente SET password = "${password}", SET cedula = "${cedula}", SET email = "${email}" ,SET username = "${username}", SET telefono = "${telefono}", SET ciudad = "${ciudad}", SET direccion = "${direccion}", SET fnacimiento = "${fnacimiento}", SET ncedula = "${ncedula}" ,SET gender = "${gender}" WHERE id = "${id}"`, [email], [password], [username] , [cedula] , async  function(error, data){
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
		// ncedula = "${ncedula}"
		// WHERE id = "${id}"
		// `;

		db.query(`
		UPDATE cliente 
		SET email = "${email}", 
		username = "${username}", 
		cedula = "${cedula}", 
		gender = "${gender}",
		telefono = "${telefono}",
		ciudad = "${ciudad}",
		direccion = "${direccion}",
		fnacimiento = "${fnacimiento}",
		codetelefono = "${codetelefono}",
		ncedula = "${ncedula}"
		WHERE id = "${id}"
		`, function(error, data){
			res.json({
				status: "success", success: "Informacion editada exitosamente"
			})
		});

	}

	if(action == 'delete'){
		const {id} = req.body;
		var query = `DELETE FROM cliente WHERE id = "${id}"`;
		
		db.query(query, function(error, data){
			res.json({
				message : 'Registro Eliminado exitosamente'
			});
		});
	}

});

module.exports = router;
