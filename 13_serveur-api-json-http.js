'use strict'

/**
 * @file 13_serveur-api-json-http.js
 * 
 * Exercise 13 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const http = require('http')

const server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        let req_url = new URL(req.url, 'http://example.com')
        let dt_param = req_url.searchParams.get('iso')
        let data = ''

        // Routing /api/parsetime
        if (req_url.pathname == '/api/parsetime') {
            let dt = new Date(dt_param)
            data = JSON.stringify({
                hour: dt.getHours(),
                minute: dt.getMinutes(),
                second: dt.getSeconds()
            })
        }

        // Routing /api/unixtime
        if (req_url.pathname == '/api/unixtime') {
            let dt = Date.parse(dt_param)
            data = JSON.stringify({
                unixtime: dt
            })
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(data)
        req.pipe(res)
    }
})
server.listen(process.argv[2])