const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

//console.log("STUFFROUTE : " + stuffRoutes);
mongoose.connect('mongodb://localhost:27017/lushi', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connexion a MongoDB reussi'))
.catch(() => console.log('Connexion a MongoDB echoue'));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

/*app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            titile: 'Smartphone',
            description: 'Le meilleur smartphone',
            imageUrl:'./img/model.PNG',
            price: 500,
            userId: 'asomihvaios',
        },
        {
            _id: 'oeihfzeomihi',
            titile: 'Galaxi Samsung S8',
            description: 'Le second smartphone',
            imageUrl:'./img/model.PNG',
            price: 500,
            userId: 'asomihvaios',
        },
    ];
    res.status(200).json(stuff);
});
*/
module.exports = app;