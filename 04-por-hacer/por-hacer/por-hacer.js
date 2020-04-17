const fs = require('fs');
var colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    })

}

let cargarDB = () => {

    try {
        // esto ya lo transforma en objeto para usarlo en el codigo
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const listar = () => {
    cargarDB();

    listadoPorHacer.forEach(porHacer => {
        console.log('=====Por Hacer====='.green);
        console.log(`${porHacer.descripcion}`);
        console.log(`Estado: ${porHacer.completado}`);
        console.log('==================='.green);
    });

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    // si no coincide regresa un -1 pero si coincide indica la posicion en la que se encuentra el elemento que
    // cumple con la condicion
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}