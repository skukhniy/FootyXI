import express from 'express';
const router = express.Router();
const controller = require('../controllers/squadsController');

router.get('/all', controller.getAllSquads);

router.post('/new', controller.saveSquad);

module.exports = router;
