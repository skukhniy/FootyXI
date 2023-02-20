"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
// const newPlayer = await pool.query(
//   'INSERT INTO players (player_name, position, team) VALUES($1, $2, $3) RETURNING *',
//   [playerName, position, team]
// );
// create squad row
// const newSquad = async (userID, formation, squad_name) => {};
// add First Team Players
const addFirstTeam = (firstTeam, squadID) => __awaiter(void 0, void 0, void 0, function* () {
    for (const [i, position] of Object.keys(firstTeam).entries()) {
        console.log(position);
        console.log(squadID);
        console.log(firstTeam[position].player_id);
        console.log(i);
        const addPlayer = yield db_1.pool.query('INSERT INTO firstteam (squad_id, player_id, position, position_order) VALUES ($1, $2, $3, $4) RETURNING id', [squadID, firstTeam[position].player_id, position, i + 1]);
    }
});
// save a new squad
exports.saveSquad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID, squadName, formation } = req.body[0];
        const { firstTeam, substitutes, reserves } = req.body[1];
        3;
        const addSquad = yield db_1.pool.query('INSERT INTO squads (user_id, formation, squad_name) VALUES($1, $2, $3) RETURNING id', [userID, formation, squadName]);
        const squadID = addSquad.rows[0].id;
        addFirstTeam(firstTeam, squadID);
        res.json(squadID);
        // res.json(req.body);
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
// save an updated squad
// get all squads
exports.getAllSquads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('all squads');
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
// get a specific squad
