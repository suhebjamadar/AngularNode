'use strict';

module.exports = function(app, db) {
    const express = require('express');
    const router = express.Router();

    router.use('/user', require('../modules/user/controllers/user.controllers')(app, db));

    return router;
};