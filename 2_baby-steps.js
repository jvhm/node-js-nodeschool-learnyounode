/**
 * @file 2_baby-steps.js
 * 
 * Exercise 2 of the tutorial 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

args = process.argv;
sum = 0;

if (args.length >= 3) {
    for (let i = 2; i < args.length; i++) {
        sum += Number(args[i]);
    }
}

console.log(sum);