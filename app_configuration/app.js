const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body -parser');
const generoRouter = require('./routes/genero');
const directorRouter = require('./routes/director');
const productoraRouter = require('./routes/productora');
const tipoRouter = require('./routes/tipo');
const mediaRouter = require('./routes/media');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());
app.use('/generos', generoRouter);
app.use('/directores', directorRouter);
app.use('/productoras', productoraRouter);
app.use('/tipos', tipoRouter);
app.use('/medias', mediaRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});