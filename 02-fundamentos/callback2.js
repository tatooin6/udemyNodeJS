let empleados = [{
        id: 1,
        nombre: 'Tato'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    },
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
];


// funciones

let getEmpleado = (id, callback) => {

    /** RETORNA EL EMPLEADO CUANDO ENCUENTRA CON EL ID QUE SE MANDO
     * let empleadoDB = empleados.find( empleado => {
     *      return empleado.id === id
     * })
     */
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }

}


/**
 * correcto
 * {
 *      nombre: Melissa,
 *      salario: 2000
 * }
 * 
 * incorrecto
 *  No se encontro un salario para el usuario Melisa
 */


/* let getSalario = (empleadoID, callback) => {
    let salarioDB = salarios.find(empleado => salarios.id === empleadoID);

    if (!salarioDB) {
        callback(`No se encontro salario para el empleado ${empleadoID}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    }
}



console.log(`empleado obtenido`);
console.log(empleadoSeleccionado);
getSalario(empleadoSeleccionado.id, (err, salario) => {
    if (err) {
        return console.log(err);
    }

    console.log(salario)
}) */


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre}, es de ${resp.salario}$`);
    })
});