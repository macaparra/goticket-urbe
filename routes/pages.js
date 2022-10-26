const express = require("express");
const router = express.Router();

// Indicamos las rutas de las páginas a las que accederemos
router.get("/", (req, res) => {
    res.render("index")
})

// Registro
router.get("/register", (req, res) => {
    res.sendFile("register.html" , {root: "./public"});
})

// Inicio de Sesion
router.get("/login", (req, res) => {
    res.sendFile("login.html" , {root: "./public"});
})

// Eventos
router.get("/evento", (req, res) => {
    res.sendFile("evento.html" , {root: "./public"});
})

module.exports = router;