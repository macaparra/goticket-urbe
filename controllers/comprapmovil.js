const db = require("../routes/db-config");
const transporter = require('../controllers/mailer');
const jwt = require("jsonwebtoken");


const comprapmovil = async (req, res) =>{
    const {email} = req.body
    const {cedula} = req.body;
    const {codetelefono} = req.body;
    const {ncedula} = req.body;
    const {telefono} = req.body;
    const {banco} = req.body;
    const {ubicacion} = req.body;
    const {cantidad_asientos} = req.body;
    const {sevento} = req.body;
    const{monto} = req.body;
    
    // Validación Correo
    db.query('SELECT * FROM cliente WHERE email = ?', [email], async (err5, result5) => {
        if (err5) throw err5;
        if(!result5.length) return res.json({ status: "error", error: "Este no es su email" })
         else{
            db.query('INSERT INTO comprapm SET ?', { email: email, cedula: cedula, codetelefono: codetelefono,telefono: telefono , ncedula: ncedula, banco: banco, ubicacion: ubicacion, cantidad_asientos: cantidad_asientos, monto: monto, sevento: sevento}, async (error, results) => {
                db.query('INSERT INTO facturasbs SET ?',{ banco: banco, ubicacion: ubicacion, cantidad_asientos: cantidad_asientos, monto: monto, sevento: sevento}, async(error2, results2)=>{
                    const token = jwt.sign( {id: result5[0].id} , process.env.JWT_SECRET , {
                        expiresIn: '10m',
                    })
                    //const verificationLink = `https://goticket-urbe-production.up.railway.app/changePassword/${token}`
                    const verificationLink = `https://goticket-urbe-production.up.railway.app/forgotPassword`;
    
                    if(`${sevento}`=="Bad Bunny"){
    
                    // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/1.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." });
                    }
    
                    else if (`${sevento}`=="Guaco"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/2.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Motherflowers"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/3.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Lasso"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/4.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Los Mesoneros"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/5.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Servando y Florentino"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/6.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Improvisto Musical"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/7.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Las Inmamables"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/9.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Romeo y Julieta"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/8.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Atentamente"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/10.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    else if (`${sevento}`=="Jassy y Neisser"){
                        // send mail with defined transport object
                    await transporter.sendMail({
                        
                        from: '"Factura de Compra" <goticketve@gmail.com>', // sender address
                        to: `${email}`, // list of receivers
                        subject: "Gracias por comprar con GoTicket", // Subject line
                        text: "A continuación podrás ver los detalles de tu compra!!", // plain text body
                        html: `
                        <h3>Muchas gracias por realizar tu compra el dia de hoy, estos son los datos de tu compra: </h3>
                        <h1>Factura</h1>
                        <hr>
                        <h5>Banco: ${banco}</h5>
                        <h5>Ubicacion: ${ubicacion}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientos}</h5>
                        <h5>Total de Compra: ${monto} Bs</h5>
                        <h5>Nombre del Evento: ${sevento}</h5>
    
                        <h1>Boleto</h1>
                        <hr> <br>
                        <img style="width:650px;" src="cid:img" />
                        ` , // html body
    
                        attachments: [{
                            filename: '1.png',
                            path:'public/img/11.png', // path contains the filename, do not just give path of folder where images are reciding.
                            cid: 'img' // give any unique name to the image and make sure, you do not repeat the same string in given attachment array of object.
                           }]
    
                        });
                    
                        if (error) throw error;
                        return res.json({ status: "success", success: "La compra ha sido realizada exitósamete por favor revisa tu correo para ver la factura y tu boleto." })
                    }
    
                    
                    
                    else{
                        return res.json({ status: "success", success: "No se envio el correo" });
                    }
                    
                })
            })         
         }
    })
}


module.exports = comprapmovil;