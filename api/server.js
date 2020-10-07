const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const authRouter = require('../authinfo/authRouter.js');
const usersRouter = require('../userinfo/usersRouter.js');
const Users = require("../userinfo/usersModel.js");

const server = express();

const sessionConfig = {
    name: 'authCookie',
    secret: 'I solemnly swear that I am up to no good!',
    cookie: {
        maxAge: 1000 * 60,
        secure: false,
        httpOnly: true,
    },
    resvae: false,
    saveUninitialized: false, 
}

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))

server.use('/api/authinfo', authRouter);
server.use('/api/userinfo', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
});

module.exports = server;