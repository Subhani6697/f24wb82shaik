const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Array of image file names
  const image_names = [
    'babu1.jpeg', 
    'babu2.jpeg', 
    'babu3.jpeg', 
    'babu4.jpeg', 
    'babu5.jpeg'
  ];

  res.render('randomitem', { title: 'A random item', image_names: image_names });
});

module.exports = router;