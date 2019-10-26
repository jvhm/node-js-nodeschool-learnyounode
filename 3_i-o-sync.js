/**
 * @file 3_i-o-sync.js
 * 
 * Exercise 3 of the tutorial 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const fs = require('fs');

var number_of_lines = 0;
if (process.argv.length >= 3) {
    file_path = process.argv[2];
    if (file_path != undefined) {
        let stream = fs.readFileSync(file_path);
        let content = stream.toString();
        number_of_lines = content.split('\n').length - 1;
    }
}

console.log(number_of_lines);