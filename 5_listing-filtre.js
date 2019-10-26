/**
 * @file 5_listing_filtre.js
 * 
 * Exercise 5 of the tutorial 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

const fs = require('fs');
const path = require('path');
const args = process.argv;

if(args.length >= 4) {
    let dir_path = args[2];
    let ext = args[3];

    fs.readdir(dir_path, function done(error, files){
        if(error) {
            console.log(error);
            return;
        }

        files.forEach((val, i, arr) => {
            // load the extension and remove the '.'
            let this_ext = path.extname(val).substring(1);
            if(this_ext === ext) {
                console.log(val);
            }
        });
    });
}
