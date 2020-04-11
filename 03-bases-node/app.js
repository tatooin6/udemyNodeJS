//requireds
//se hace una deconstruccion
const { crearArchivo } = require('./multiplicar/multiplicar');

//se puede usar multiplicar.crearArchivo, pero gracias a la desctructuracion se puede

//console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
//console.log(base);

crearArchivo(base)
    .then( archivo => console.log(`archivo creado: ${archivo}`))
    .catch( err => console.log(err));