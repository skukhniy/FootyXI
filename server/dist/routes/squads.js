"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller = require('../controllers/squadsController');
router.get('/all', controller.getAllSquads);
router.get('/all/:user', controller.getUsersSquads);
router.get('/squad-ids', controller.getSquadIDs);
router.get('/:id', controller.getSpecificSquad);
router.post('/new', controller.saveSquad);
router.put('/update/:id', controller.updateSquad);
router.delete('/delete/:id', controller.deleteSquad);
module.exports = router;
