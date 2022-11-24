const express = require("express");
const loggedIn = require("../controllers/loggedIn");
const router = express.Router();
const jwt = require("jsonwebtoken");
const token = require("../controllers/restorep");
const verificationLink  = require("../controllers/restorep");
const loggedInadmin = require("../controllers/loggedInadmin");
const restorep = require("../controllers/restorep")
const logout = require("../controllers/logout");
const logoutadmin = require("../controllers/logoutadmin");



// Indicamos las rutas de las páginas a las que accederemos
router.get("/", (req, res) => {
    res.render("index"); 
})

// Registro
router.get("/register", (req, res) => {
    res.sendFile("register.html" , {root: "./public"});
})


// Inicio de Sesion
router.get("/login",  (req, res) => {
    res.sendFile("login.html" , {root: "./public"});
})

// Eventos
router.get("/evento", (req, res) => {
    res.sendFile("evento.html" , {root: "./public"});
})

// Clientes
router.get("/clientes", loggedIn ,  (req, res) => {
    res.sendFile("clientes.html" , {root: "./public"});
})

// Concierto 1
router.get("/concierto-1", (req, res) => {
    res.sendFile("concierto-1.html" , {root: "./public"});
})

// Concierto 2
router.get("/concierto-2",  (req, res) => {
    res.sendFile("concierto-2.html" , {root: "./public"});
})

// Concierto 3
router.get("/concierto-3", (req, res) => {
    res.sendFile("concierto-3.html" , {root: "./public"});
})

// Concierto 4
router.get("/concierto-4", (req, res) => {
    res.sendFile("concierto-4.html" , {root: "./public"});
})

// Concierto 5
router.get("/concierto-5", (req, res) => {
    res.sendFile("concierto-5.html" , {root: "./public"});
})

// Concierto 6
router.get("/concierto-6",  (req, res) => {
    res.sendFile("concierto-6.html" , {root: "./public"});
})

// Conferencia 1
router.get("/conferencia-1", (req, res) => {
    res.sendFile("conferencia-1.html" , {root: "./public"});
})

// Conferencia 2
router.get("/conferencia-2",  (req, res) => {
    res.sendFile("conferencia-2.html" , {root: "./public"});
})

// Teatro 1
router.get("/teatro-1", (req, res) => {
    res.sendFile("teatro-1.html" , {root: "./public"});
})

// Teatro 2
router.get("/teatro-2", (req, res) => {
    res.sendFile("teatro-2.html" , {root: "./public"});
})

// Teatro 3
router.get("/teatro-3",  (req, res) => {
    res.sendFile("teatro-3.html" , {root: "./public"});
})

// Concierto 1 Cliente
router.get("/concierto-1-cliente", loggedIn , (req, res) => {
    res.sendFile("concierto-1-cliente.html" , {root: "./public"});
})

// Concierto 2 Cliente
router.get("/concierto-2-cliente", loggedIn , (req, res) => {
    res.sendFile("concierto-2-cliente.html" , {root: "./public"});
})

// Concierto 3 Cliente
router.get("/concierto-3-cliente", loggedIn , (req, res) => {
    res.sendFile("concierto-3-cliente.html" , {root: "./public"});
})

// Concierto 4 Cliente
router.get("/concierto-4-cliente", loggedIn , (req, res) => {
    res.sendFile("concierto-4-cliente.html" , {root: "./public"});
})

// Concierto 5 Cliente
router.get("/concierto-5-cliente", loggedIn , (req, res) => {
    res.sendFile("concierto-5-cliente.html" , {root: "./public"});
})

// Concierto 6 Cliente
router.get("/concierto-6-cliente", loggedIn , (req, res) => {
    res.sendFile("concierto-6-cliente.html" , {root: "./public"});
})

// Teatro 1 Cliente
router.get("/teatro-1-cliente", loggedIn , (req, res) => {
    res.sendFile("teatro-1-cliente.html" , {root: "./public"});
})

// Teatro 2 Cliente
router.get("/teatro-2-cliente", loggedIn , (req, res) => {
    res.sendFile("teatro-2-cliente.html" , {root: "./public"});
})

// Teatro 3 Cliente
router.get("/teatro-3-cliente", loggedIn , (req, res) => {
    res.sendFile("teatro-3-cliente.html" , {root: "./public"});
})

// Conferencia 1 Cliente
router.get("/conferencia-1-cliente", loggedIn , (req, res) => {
    res.sendFile("conferencia-1-cliente.html" , {root: "./public"});
})

// Conferencia 2 Cliente
router.get("/conferencia-2-cliente", loggedIn , (req, res) => {
    res.sendFile("conferencia-2-cliente.html" , {root: "./public"});
})

// Compra Pago Movil - Bad Bunny
router.get("/compra-pagomovil", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil.html" , {root: "./public"});
})

// Compra Pago Movil - Guaco
router.get("/compra-pagomovil-2", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-2.html" , {root: "./public"});
})

// Compra Pago Movil - Motherflowers
router.get("/compra-pagomovil-3", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-3.html" , {root: "./public"});
})

// Compra Pago Movil - Lasso
router.get("/compra-pagomovil-4", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-4.html" , {root: "./public"});
})

// Compra Pago Movil - Los Mesoneros
router.get("/compra-pagomovil-5", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-5.html" , {root: "./public"});
})

// Compra Pago Movil - Servando y Florentino
router.get("/compra-pagomovil-6", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-6.html" , {root: "./public"});
})

// Compra Pago Movil - Improvisto Musical
router.get("/compra-pagomovil-7", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-7.html" , {root: "./public"});
})

// Compra Pago Movil - Romeo y Julieta
router.get("/compra-pagomovil-8", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-8.html" , {root: "./public"});
})

// Compra Pago Movil - Las Inmamables
router.get("/compra-pagomovil-9", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-9.html" , {root: "./public"});
})

// Compra Pago Movil - Atentamente
router.get("/compra-pagomovil-10", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-10.html" , {root: "./public"});
})

// Compra Pago Movil - Jassy y Neisser
router.get("/compra-pagomovil-11", loggedIn , (req, res) => {
    res.sendFile("compra-pagomovil-11.html" , {root: "./public"});
})

// Compra Zelle Bad Bunny
router.get("/compra-zelle", loggedIn , (req, res) => {
    res.sendFile("compra-zelle.html" , {root: "./public"});
})

// Compra Zelle Guaco
router.get("/compra-zelle-2", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-2.html" , {root: "./public"});
})

// Compra Zelle Motherflowers
router.get("/compra-zelle-3", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-3.html" , {root: "./public"});
})

// Compra Zelle Lasso
router.get("/compra-zelle-4", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-4.html" , {root: "./public"});
})

// Compra Zelle Los Mesoneros
router.get("/compra-zelle-5", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-5.html" , {root: "./public"});
})

// Compra Zelle Servando y Florentino
router.get("/compra-zelle-6", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-6.html" , {root: "./public"});
})

// Compra Zelle Improvisto Musical
router.get("/compra-zelle-7", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-7.html" , {root: "./public"});
})

// Compra Zelle Romeo y Julieta
router.get("/compra-zelle-8", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-8.html" , {root: "./public"});
})

// Compra Zelle Las Inmamables
router.get("/compra-zelle-9", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-9.html" , {root: "./public"});
})

// Compra Zelle Atentamente
router.get("/compra-zelle-10", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-10.html" , {root: "./public"});
})

// Compra Zelle Jassy y Neisser
router.get("/compra-zelle-11", loggedIn , (req, res) => {
    res.sendFile("compra-zelle-11.html" , {root: "./public"});
})


// Admin
router.get("/admin", loggedInadmin ,  (req, res) => {
    res.sendFile("admin.html" , {root: "./public"});
})

// Admin- Agregar Clienta a la Base de datos
router.get("/registroclienteadmin", loggedInadmin ,  (req, res) => {
    res.sendFile("registroclienteadmin.html" , {root: "./public"});
})

// Recuperación de Contraseña - EMAIL
router.get("/restorep", (req, res) => {
    res.sendFile("restorep.html" , {root: "./public"});
})

// Cambiar Contraseña
router.get(`/changePassword`,loggedIn , (req, res) => {
    res.sendFile("changePassword.html" , {root: "./public"});
})

router.get(`/forgotPassword`, (req, res) => {
    res.sendFile("forgotPassword.html" , {root: "./public"});
})

//Backup
router.get("/goticketbdd.sql", (req, res) => {
    res.sendFile("goticketbdd.sql" , {root: "./backup"});
})

//Manual de usuario
router.get("/manualUsuario.pdf", (req, res) => {
    res.sendFile("manualUsuario.pdf" , {root: "./manuales"});
})






//logout -- Resetea las cookies de cliente userRegistered
router.get("/logout", logout);

//logoutadmin -- Resetea las cookies de admin userRegistered2
router.get("/logoutadmin", logoutadmin);




module.exports = router;