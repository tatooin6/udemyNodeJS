//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log(`======================`.green);
        console.log(`Tabla de ${ base }`.green);
        console.log(`======================`.green);
        if (!Number(base)) {
            reject(`El valor introducido de la base: ${base} no es un número`.red);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido del limite: ${limite} no es un numero`.red);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i} \n`);
        }
    });
}

//module.exports.crearArchivo = ( base ) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}', no es un numero`);
            return;
            // el return es para que no continue
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${i*base} \n`);
        }
        //console.log(data);

        //parametros
        //nombre del archivo - el contenido que se quiere grabar - callback
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });


};


// en otro caso seria crearArchivo: crearArchivo
// ecma nos permite agregar simplemente los nombres de los archivos
module.exports = {
    crearArchivo,
    listarTabla
};