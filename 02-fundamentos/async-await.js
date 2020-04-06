/**
 * async-await
 * 
 * si ponemos async a una funcion es como si le estuvieramos pidiendo que nos devuelva una promesa
 */
let getNombre = async() => {

        //undefined.nombre;
        //throw new Error('No existe un nombre para ese usuario');

        return 'Tato';
    }
    // lo que sea que retorne la promesa va a ser el resolve
    /* getNombre()
        .then(nombre => {
            console.log(nombre);
        })
        .catch(e => {
            console.log('Error del ASYNC: ', e);
        }); */

let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tato');
        }, 3000);
    });

};

let saludo = async() => {

    let nombre = await getNombre2();

    return `Hola ${nombre}`;
}

saludo()
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error del ASYNC: ', e);
    });