const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const info = require('./info/info');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad  para obtner el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log) */

/* clima.getClima(-16.500000, -68.150002)
    .then(console.log)
    .catch(console.error) */

// mi solucion
/* info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log) */

// de fernando

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `El climade ${coords.direccion} es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}∘C`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)