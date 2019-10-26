'use strict'

/**
 * @file 8_collecteur-http.js
 * 
 * Exercise 8 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const bl = require('bl')
const http = require('http')

http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
        if (err) return console.log(err)

        let str = data.toString()
        console.log(str.length)
        console.log(str)
    }))
});