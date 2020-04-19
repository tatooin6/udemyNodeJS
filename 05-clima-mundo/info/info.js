const clima = require('../clima/clima');
const lugar = require('../lugar/lugar');
const colors = require('colors/safe');

const getInfo = async(direccion) => {
    // return (`Lugar a verificar ${lugar}`);
    const lugarConsultado = await lugar.getLugarLatLng(direccion)
    if (!lugarConsultado) {
        throw new Error(colors.red(`No se puede encontrar la dirección: ${direccion}`))
    }
    const climaConsultado = await clima.getClima(lugarConsultado.latitud, lugarConsultado.longitud)
    if (!climaConsultado) {
        throw new Error(colors.red(`No se pudo obtener el clima de: ${direccion}`))
    }
    return (`El clima de ${colors.magenta(direccion)} es de ${colors.cyan(climaConsultado)}∘C`)
        //return (typeof climaConsultado)

};

module.exports = {
    getInfo
}