const db = require("../routes/db-config");
const transporter = require('../controllers/mailer');
const jwt = require("jsonwebtoken");

const comprazelle = async (req, res) =>{
    const {email} = req.body;
    const {referencia} = req.body;
    const {ubicacionz} = req.body;
    const {cantidad_asientosz} = req.body;
    const {sevento} = req.body;
    const{monto} = req.body;
    const{titular_cuenta} = req.body

    //Validacion Correo

    db.query('SELECT * FROM cliente WHERE email = ?', [email], async (err5, result5) => {

        if (err5) throw err5;
        if(!result5.length) return res.json({ status: "error", error: "Este no es su email" })

        else{
            db.query('INSERT INTO compraz SET ?', { email: email, referencia: referencia, ubicacionz: ubicacionz, cantidad_asientoz: cantidad_asientosz, monto: monto, titular_cuenta: titular_cuenta, sevento: sevento}, async (error, results) => { 
                db.query('INSERT INTO facturasusd SET ?', { ubicacionz: ubicacionz, cantidad_asientosz: cantidad_asientosz, monto: monto, sevento: sevento, referencia: referencia}, async (error2, results2) =>{
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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
                        
                        <h5>Referencia: ${referencia}</h5>
                        <h5>Ubicacion: ${ubicacionz}</h5>
                        <h5>Cantidad de asientos: ${cantidad_asientosz}</h5>
                        <h5>Total de Compra: ${monto} $</h5>
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







module.exports = comprazelle;