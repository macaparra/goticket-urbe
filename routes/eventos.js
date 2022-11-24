const express = require("express");
const router = express.Router();
const db = require("./db-config");
const loggedInadmin = require("../controllers/loggedInadmin");
const bycrypt = require("bcryptjs");

router.get("/", loggedInadmin ,function(req, res, next){

	res.render('eventos');

});

router.post("/action", async function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM eventos ORDER BY id DESC";

		db.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}
	if (action == 'Agregar') {
		const {titulo_evento} = req.body;
		const {categoria} = req.body;
		const {asientos_grada} = req.body;
		const {asientos_pista} = req.body;
		const {asientos_vip} = req.body;
		const {ubicacion} = req.body;
		const {hora} = req.body;
		const {fecha_evento} = req.body;
		const {precio_grada} = req.body;
		const {precio_pista} = req.body;
		const {precio_vip} = req.body;

		db.query('SELECT titulo_evento FROM eventos WHERE titulo_evento = ?' , [titulo_evento], async (err, result) => {
			if (err) throw err;
            if(result[0]) return res.json({ status: "error", error: "El evento ingresado ya tiene asignado una funcion" })
			// Validacion de Hora
			db.query('SELECT fecha_evento FROM eventos WHERE fecha_evento = ?' , [fecha_evento], async (err2, result2) => {
				if (err2) throw err2;
                if(result2[0]) return res.json({ status: "error", error: "Ya existe un evento asignado para esta fecha" })
				else {
					db.query('INSERT INTO eventos SET ?', { titulo_evento: titulo_evento, categoria: categoria, asientos_grada: asientos_grada, asientos_pista: asientos_pista ,asientos_vip: asientos_vip ,precio_grada: precio_grada , precio_pista: precio_pista, precio_vip: precio_vip , ubicacion: ubicacion, hora: hora, fecha_evento: fecha_evento}, function(error, data){
						res.json({
							status: "success", success: "Registro realizado exitosamente"
						});
					});
				}
			})
		})
	}

	if(action == 'fetch_single'){
		const {id} = req.body;
		const query = `SELECT * FROM eventos WHERE id = "${id}"`;
		
		db.query(query, function (error, data){
			res.json(data[0]);
		});
	}

	if(action == 'Editar') {
		const {id} = req.body;
		const {titulo_evento} = req.body;
		const {categoria} = req.body;
		const {asientos_grada} = req.body;
		const {asientos_pista} = req.body;
		const {asientos_vip} = req.body;
		const {ubicacion} = req.body;
		const {hora} = req.body;
		const {fecha_evento} = req.body;
		const {precio_grada} = req.body;
		const {precio_pista} = req.body;
		const {precio_vip} = req.body;

		db.query(`
		UPDATE eventos 
		SET titulo_evento = "${titulo_evento}", 
		categoria = "${categoria}", 
		asientos_grada = "${asientos_grada}", 
		asientos_pista = "${asientos_pista}",
		asientos_vip = "${asientos_vip}",  
		ubicacion = "${ubicacion}",
		hora = "${hora}", 
		fecha_evento = "${fecha_evento}",
		precio_grada = "${precio_grada}",
		precio_pista = "${precio_pista}",
		precio_vip = "${precio_vip}" 
		WHERE id = "${id}"
		`, function(error, data){
			res.json({
				status: "success", success: "Informacion editada exitosamente"
			})
		});
	}

	if(action == 'delete'){
		const {id} = req.body;
		var query = `DELETE FROM eventos WHERE id = "${id}"`;
		
		db.query(query, function(error, data){
			res.json({
				message : 'Registro Eliminado exitosamente'
			});
		});
	}
});

module.exports = router;