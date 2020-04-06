let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

//console.log(deadpool.getNombre());

//extraer el nombre unicamente
/* let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder; */

//destructuracion
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);