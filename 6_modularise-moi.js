/**
 * @file 6_modularise-moi.js
 * 
 * Exercise 6 of the tutorial 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

 const filterDir = require('./modules/module_1');
 const args = process.argv;

 if(args.length >= 4) {
    let dir_path = args[2];
    let ext = args[3];

    filterDir(dir_path, ext, (err, data) => {
        if(err) {
            console.log(err);
        }

        data.forEach(element => {
            console.log(element);
        });
    });
}