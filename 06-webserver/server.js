const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//especificar un callback o un función
app.use(express.static(__dirname + '/public'))

// Para usar partials en una carpeta
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

// Express HBS Engine
app.set('view engine', 'hbs');

//aqui estaban los helpers

// se comenta para que no se confunda con la pagina
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'TaTo',
    });

})

// para redireccionar el about
app.get('/about', (req, res) => {

    res.render('about');

})

/* app.get('/data', (req, res) => {
    res.send('Hola Data')
}) */

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto 3000`);
})