const server = require ('../api/server.js')
const router = require('express').Router();
const Users = require('../userinfo/usersModel.js');
const restricted = require('../authinfo/restricted-middleware.js')

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(error => res.status(500).json({ message: 'Could not find Users'}));
});

module.exports = router;