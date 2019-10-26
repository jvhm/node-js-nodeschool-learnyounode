'use strict'

/**
 * @file 12_convertisseur-majuscules-http.js
 * 
 * Exercise 12 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
    if(req.method == 'POST') {
        req.pipe(map(function(chunck) {
            return chunck.toString().toUpperCase()
        })).pipe(res)
    }
});
server.listen(process.argv[2])