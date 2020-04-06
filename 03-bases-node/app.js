//requireds
const fs = require('fs');
//const fs = require('express'); // los externos
//const fs = require('./fs'); // los propios

let base = 13;
let data = '';

for (let i = 1; i < 10; i++) {
    data += (`${base} * ${i} = ${i*base} \n`);
}


//parametros
//nombre del archivo - el contenido que se quiere grabar - callback
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido grabado!`);
});