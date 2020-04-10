const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, `${ archivo }`.red))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');


}

//let base = '5';

//let argv2 = process.argv;

//console.log(argv.base);

//console.log(argv2);

// let parametro = argv[2];

// let base = parametro.split('=')[1]