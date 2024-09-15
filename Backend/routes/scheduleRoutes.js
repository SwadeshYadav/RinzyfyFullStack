const express = require('express');
const router = express.Router();
const { getSchedules } = require('../controllers/schedulesController');

router.get('/', getSchedules);

module.exports = router;
