const express = require('express')

const router = express.Router();


// any route here would be pre-appended with /auth

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  });
});


// POST auth/signup:

router.post('/signup', (req, res) => {
  console.log('req', req.body);

  res.json({
    message: "🦄🌈✨Hello, Let's get your signup!🌈✨🦄"
  });
});

module.exports = router;