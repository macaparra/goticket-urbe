const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const loggedInadmin = (req, res, next) => {
    if (!req.cookies.userRegistered2){
        res.send('Access Denied, you must login first')
        return next();
    }
    else {
        try {
            const decoded = jwt.verify(req.cookies.userRegistered2, process.env.JWT_SECRET); 
            db.query('SELECT * FROM administrador WHERE id = ?', [decoded.id], (err, result) => {
                if(err) return next();
                req.user = result[0];
                return next();
            })
            
        } catch (err) {
            if (err) return next()
            
        } 
    }
   
    
} 
module.exports = loggedInadmin;