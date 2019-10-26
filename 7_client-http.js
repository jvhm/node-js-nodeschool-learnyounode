'use strict'

/**
 * @file 7_client-http.js
 * 
 * Exercise 7 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});