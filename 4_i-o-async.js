/**
 * @file 4_i-o-async.js
 * 
 * Exercise 4 of the tutorial 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const fs = require('fs');

if (process.argv.length >= 3) {
    file_path = process.argv[2];
    if (file_path != undefined) {
        fs.readFile(file_path, function callback(err, stream) {
            if (!err) {
                let content = stream.toString();
                let number_of_lines = content.split('\n').length - 1;
                console.log(number_of_lines);
            }
            else
                console.log(err);
        });
    }
}