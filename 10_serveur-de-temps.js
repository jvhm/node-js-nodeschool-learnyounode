'use strict'

/**
 * @file 10_serveur-de-temps.js
 * 
 * Exercise 10 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const net = require('net')
const strftime = require('strftime')

const server = net.createServer(function (socket) {
    let dt = strftime('%Y-%m-%d %H:%M', new Date())
    socket.end(dt + '\n')
})
server.listen(process.argv[2])