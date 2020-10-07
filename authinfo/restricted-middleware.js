const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../userinfo/usersModel.js');

module.exports = (req, res, next) => {
    const { username, password } = req.headers;

    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({ message: 'Invalid Username or Password'});
                }
            })
            .catch(error => {
                res.status(500).json({ message: 'Unexpected error occured' });
            });
    } else {
        res.status(400).json({ message: 'Must provide login credentials to enter site'});
    }
};