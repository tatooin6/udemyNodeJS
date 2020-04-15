const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//requireds
// command necesita el comando, una ayuda y un objeto de flags que se pueden utilizar ocn ese comando
const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}