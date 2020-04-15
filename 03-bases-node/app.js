//importar requires
// solo se importa la funcion que nos interesa del objeto que se importa
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//se hace una deconstruccion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//se puede usar multiplicar.crearArchivo, pero gracias a la desctructuracion se puede


//console.log(process.argv); // esta es la entrada sin el yargs
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */



let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.rainbow(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
/*console.log('Limite:', argv.limite); */