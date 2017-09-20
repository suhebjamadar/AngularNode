'use strict';

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Initialize the config
const config = require('./api/config');

// Application
const app = express();

// Get our API routes
const api = require('./api/routes')(app, config.database);

// Set our api routes
app.use('/api', api);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'wwwroot')));

// Middleware to use for all request and catch all other routes and return the index file
api.use(function(req, res, next) {
    if (req.path.startsWith('/api')) {
        res.status(404).send({ url: req.originalUrl + 'not found' });
    } else {
        res.sendFile(path.join(__dirname, 'wwwroot/index.html'));
    }
    next();
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));