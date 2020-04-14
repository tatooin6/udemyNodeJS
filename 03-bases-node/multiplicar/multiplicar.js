
//requireds
const fs = require('fs');

//module.exports.crearArchivo = ( base ) => {
let crearArchivo = ( base ) => {
    return new Promise ( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}', no es un numero`);
            return;
            // el return es para que no continue
        }

        let data = '';
        
        for (let i = 1; i <= 10; i++) {
            data += (`${base} * ${i} = ${i*base} \n`);
        }
        //console.log(data);
               
        //parametros
        //nombre del archivo - el contenido que se quiere grabar - callback
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else { 
                resolve(`tabla-${base}.txt`);
            }   
        });
    });

    
};


// en otro caso seria crearArchivo: crearArchivo
// ecma nos permite agregar simplemente los nombres de los archivos
module.exports = {
    crearArchivo
};


