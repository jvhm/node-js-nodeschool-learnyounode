'use strict'

/**
 * @file 9_jongler-avec-asynchrone.js
 * 
 * Exercise 9 du tutoriel 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const bl = require('bl')
const http = require('http')
let results = []
let count = 0

function printResults() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], (response) => {
        response.pipe(bl((err, data) => {
            if (err) {
                return console.log(err)
            }
            
            count++
            results[index] = data.toString()

            if(count === 3){
                printResults()
            }
        }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}