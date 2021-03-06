var express = require('express');
var router = express.Router();
var generatePassword = require('password-generator');

// Put all API endpoints under '/api'
router.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);
  console.log(`Sent ${count} passwords`);
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});


module.exports = router;