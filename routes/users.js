var express = require('express');
var router = express.Router();
var generatePassword = require('password-generator');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
// 	// Comment out this line:
//   //res.send('respond with a resource');

//   // And insert something like this instead:
//   res.json([{
//   	id: 1,
//   	username: "samsepi0l"
//   }, {
//   	id: 2,
//   	username: "D0loresH4ze"
//   }, {
//     id: 3,
//     username: "Testing1"
//   }
//   ]);
// });
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