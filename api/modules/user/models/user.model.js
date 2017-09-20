'use strict';

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    gender: String
});

module.exports = mongoose.model('User', UserSchema);