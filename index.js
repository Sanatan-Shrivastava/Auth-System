const express = require('express');
const volleyball = require('volleyball');
const bodyparser = require('body-parser');
const app = express();
const auth = require('./Auth/index.js');

app.use(volleyball);

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨Hello World!🌈✨🦄'
  });
});

app.use('/auth', auth);
app.use('/auth/signup', auth);

// Not found Middleware
// next sends us to next middle ware
function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

// Error handling Middleware
function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Listening on port', port);
});