
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/techs', controller.createtech);
router.get('/techs', controller.getAlltech);

// Default route
router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

module.exports = router;