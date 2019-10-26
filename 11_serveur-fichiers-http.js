'use strict'

/**
 * @file 11_serveur-fichiers-http.js
 * 
 * Exercise 11 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    let file_stream = fs.createReadStream(process.argv[3])

    res.writeHead(200, { 'content-type': 'text/plain' })
    file_stream.pipe(res)
})
server.listen(process.argv[2])