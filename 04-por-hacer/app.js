//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log(`Crear tarea por hacer`);
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        // console.log(`Mostrar todas las tareas por hacer`);
        porHacer.listar();
        break;
    case 'actualizar':
        //console.log(`Actualiza una tarea por hacer`);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log(`Comando no es reconocido`);
        break;
}