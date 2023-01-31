import express from 'express';
const router = express.Router();
const controller = require('../controllers/playersController');

// Player Search - SquadBuilder
router.get('/search', controller.playerSearch);

// Get Specific Player

module.exports = router;
