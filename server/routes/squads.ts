import express from 'express';
const router = express.Router();
const controller = require('../controllers/squadsController');

router.get('/all/:user', controller.getAllSquads);

router.get('/:id', controller.getSpecificSquad);

router.post('/new', controller.saveSquad);

module.exports = router;
