const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;

const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json()); // application/json

app.use('/feed', routes);

mongoConnect(() => {
     app.listen(3000);
});



