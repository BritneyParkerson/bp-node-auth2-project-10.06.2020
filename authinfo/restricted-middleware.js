const jwt = require('jsonwebtoken');
const secrets = require("../db/secrets.js");

module.exports = (req, res, next) => {
    try {
        const Authorization = req.headers

        if (Authorization) {
        jwt.verify(token, secrets.jwtSecret, function(err, decoded) {
         if (err) {
            res.status(401).json({ message: "You shall not pass!"});
         } else {
             req.decode = decoded;
             console.log(req.decode);
             next();
         }
        })
    } else {
        throw new Error("Must provide login credentials to enter site");
    }
}   catch (err) {
    res.status(401).json({ message: 'There was an error with your credentials'});
}
};