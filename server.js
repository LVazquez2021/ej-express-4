const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const url = path.join(__dirname, 'index.html')
const PORT = 3030;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

/* reset(); */

app.get('/', function(req, res) {
    res.sendFile(url)
})

app.post('/saludo', function(req, res) {
    const { nombre, apellido, apodo } = req.body;
    if (nombre === '' || apellido === '' || apodo === '') {
        res.send(`<h1>Por favor complete todos los campos</h1>`);
    } else {
        res.send(`<h1>Hola, mi nombre completo es ${nombre} ${apellido} y me dicen ${apodo}</h1>`);
    }
})

app.listen(PORT, function() {
    console.log(`el servidor esta corriendo en el puerto ${PORT}`);
});