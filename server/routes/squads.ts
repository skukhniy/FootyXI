import express from 'express';
const router = express.Router();
const controller = require('../controllers/squadsController');

router.get('/all', controller.getAllSquads);

router.get('/all/:user', controller.getUsersSquads);

router.get('/squad-ids', controller.getSquadIDs);

router.get('/:id', controller.getSpecificSquad);

router.post('/new', controller.saveSquad);

router.put('/update/:id', controller.updateSquad);

router.delete('/delete/:id', controller.deleteSquad);

module.exports = router;
