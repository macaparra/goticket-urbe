/*

Para acceder debemos ingresar el comando "nodemon"

*/

// npm packages
const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const path = require('path');


// constante para indicar que se utilizara el puerto 5000 o uno predeterminado
const PORT = process.env.PORT || 4000;

// se leen los archivos de la carpeta public
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use(express.static(path.join(__dirname, "public")));

// mostramos el inicio a través del motor de plantilla .ejs
app.set("view engine", "ejs");

// indicamos que estara en el directorio views
app.set("views", "./views");

// llamamos a cookie-parser y express.json
app.use(cookie());
app.use(express.json());


// Mostramos un mensaje por consola de que hemos iniciado la base de datos (Para efectos prácticos)
db.connect((err) => {
    if(err) throw err;
    console.log("Base de datos Conectada")
})

// Solicitamos acceso a las rutas
app.use("/" , require("./routes/pages"))

// 
app.use("/api", require("./controllers/auth"))

// solicitamos iniciar en el puerto ya establecido en la constante PORT
app.listen(PORT)

