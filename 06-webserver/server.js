const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//especificar un callback o un función para hacer publica una carpeta del server
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

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})

// ver app  
/*
// ver app  https://tato-webpage.herokuapp.com/ deployed to Heroku
git push heroku master
*/ 

// npm run nodemon
/* "scripts": {
    "start": "node server.js",
    "nodemon": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, */