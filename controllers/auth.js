const express = require("express");
const register = require("./register")
const login = require("./login")
const restorep = require("./restorep")
const comprapmovil = require("./comprapmovil");
const comprazelle = require("./comprazelle");
const forgotPassword = require("./forgotPassword") // !!
const changePassword = require("./changePassword")
const router = express.Router();


// Mostramos la salida POST de nuestros archivos
router.post("/register", register)
router.post("/login", login)
router.post("/restorep", restorep)
router.post("/changePassword", changePassword)
router.post("/forgotPassword", forgotPassword) //!!
router.post("/compra-pagomovil", comprapmovil)
router.post("/compra-zelle", comprazelle)

//router.get("/logout", logout)

module.exports = router;