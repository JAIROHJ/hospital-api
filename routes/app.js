const express = require('express');

const router = express.Router();

const homeCont = require('../controllers/home_controller');

router.get('/',homeCont.home);

// to handle all routes of doctors
router.use('/doctors',require('./doctor'));
// to handle all routes of patients
router.use('/patients',require('./patient'));
// to handle all routes of reports
router.use('/report',require('./report'));  

module.exports = router;