/**
 * Un callback es simplemente una funcion que se ejecuta despues de que algo sucede
 * Timeout recibe otra funcion que se cumple cuando sucede una condicion
 */

/* setTimeout(() => {
    console.log(`hola mundo`);
}, 3000); */

// ecmascript 6 no es necesario poner id: id
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Tato',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }

}


getUsuarioById(11, (err, usuario) => {
    // si hay un error
    if (err) {
        return console.log(err);
    }


    // otro tipo de concatenacion 
    console.log('Usuario de base de datos', usuario);
});