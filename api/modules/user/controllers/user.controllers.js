'use strict';

module.exports = function(app, db) {
    const express = require('express');
    const router = express.Router();
    const mongoose = require('mongoose');
    const UserModel = require('../models/user.model');

    //connect to the database
    mongoose.connect(db.url, { useMongoClient: true });
    const conn = mongoose.connection;

    router.post('/', function(req, res) {
        res.send('Create User');
    });

    router.get('/', function(req, res) {
        if (conn.readyState == conn.states.connected) {
            UserModel.find(function(err, users) {
                if (err) res.send(err);
                res.json(users);
            });
        } else {
            res.send('Could not connect to the database');
        }
    });

    router.get('/:id', function(req, res) {
        if (conn.readyState == conn.states.connected) {
            UserModel.findOne({ 'id': parseInt(req.params.id) }, function(err, user) {
                if (err) res.send(err);
                res.json(user);
            });
        } else {
            res.send('Could not connect to the database');
        }
    });

    router.put('/', function(req, res) {
        res.send('User Put');
    });

    router.delete('/:id', function(req, res) {
        if (conn.readyState == conn.states.connected) {
            UserModel.findOneAndRemove({ 'id': parseInt(req.params.id) }, function(err, user) {
                if (err) res.send(err);
                res.send('User deleted successfully');
            });
        } else {
            res.send('Could not connect to the database');
        }
    });

    return router;
};