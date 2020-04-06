/* function sumar(a, b) {
    return a + b;
} */


/* let sumar = (a, b) => {
    return a + b;
} */
// si el retorno de toda la linea es de una sola linea se puede hacer l0 siguiente
// let sumar = (a, b) => a + b;

//console.log(sumar(10, 20));


let saludar = () => 'hola mundo';

// no olvides poner los () de la funcion
//console.log(saludar());

/* let personalizado = (nombre) => {
    console.log(`HOla ${nombre}`);
} */

let personalizado = nombre => `Mucho gusto: ${nombre}`;

console.log(personalizado('tato'));


// el valorde this apunta fuerade la funcion
// apunta a lo que valga fuera de la funcion de la flecha
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getNombre());