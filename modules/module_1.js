/**
 * @file module_1.js
 * 
 * Module created for the exercise 6 of 'learnyounode'
 * https://www.github.com/workshopper/learnyounode
 * https://nodeschool.io
 */

/**
 * Cette fonction reçoit un chemin de répertoire et 
 * filtre tous les fichiers qui contien l'extension spécifiée.
 */

const fs = require('fs');
const path = require('path');

module.exports = function (dir_path, extension, callback) {
    if (dir_path == undefined || extension == undefined) {
        return callback('Aucun chemin ou extension valide n\'a été fourni.');
    }

    fs.readdir(dir_path, function done(error, files) {
        if (error) {
            return callback(error);
        }

        // Filtre les fichiers avec l'extension correcte.
        // Pour comparer les extensions, on enlève le '.' à partir de 
        // l'extension obtenue à partir de la méthode 'extname'
        return callback(null, files.filter(f => path.extname(f).substring(1) == extension));
    });
}