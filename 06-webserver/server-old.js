const express = require('express')
const app = express()

//especificar un callback o un función
app.use(express.static(__dirname + '/public'))

// Express HBS Engine
app.set('view engine', 'hbs');

// se comenta para que no se confunda con la pagina
/* app.get('/', (req, res) => {
    //res.send('Hola Mundo')

    let salida = {
        nombre: 'Tato',
        edad: 25,
        url: req.url
    }

    res.send(salida);

}) */

/* app.get('/data', (req, res) => {
    res.send('Hola Data')
}) */

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto 3000`);
})