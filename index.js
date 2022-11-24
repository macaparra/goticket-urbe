/*

Para acceder debemos ingresar el comando "nodemon"

*/

// npm packages
const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const path = require('path');
var sampleDataRouter = require('./routes/editarcliente');
var eventosDataRouter = require('./routes/eventos');
var editaradminDataRouter = require('./routes/editaradmin');
var facturasbsDataRouter = require('./routes/facturasbs');
var facturasusdDataRouter = require('./routes/facturasusd');
var comprasbsDataRouter = require('./routes/comprasbs');
var comprasusdDataRouter = require('./routes/comprasusd');

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
app.use(express.urlencoded({ extended: false }));


// Mostramos un mensaje por consola de que hemos iniciado la base de datos (Para efectos prácticos)
db.connect((err) => {
    if(err) throw err;
    console.log("Base de datos Conectada")
})

// Solicitamos acceso a las rutas
app.use("/" , require("./routes/pages"))

app.use('/editarcliente', sampleDataRouter);

app.use('/eventos', eventosDataRouter);

app.use('/editaradmin', editaradminDataRouter);

app.use('/facturasbs', facturasbsDataRouter)

app.use('/facturasusd', facturasusdDataRouter)

app.use('/comprasbs', comprasbsDataRouter)

app.use('/comprasusd', comprasusdDataRouter)

// Indicamos donde estaran las rutas de las API / endpoints
app.use("/api", require("./controllers/auth"))

// solicitamos iniciar en el puerto ya establecido en la constante PORT
app.listen(PORT)


