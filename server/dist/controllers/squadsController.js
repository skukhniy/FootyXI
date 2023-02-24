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
        const addPlayer = yield db_1.pool.query('INSERT INTO firstteam (squad_id, player_id, position, position_order) VALUES ($1, $2, $3, $4)', [squadID, firstTeam[position].player_id, position, i + 1]);
    }
});
// add Substitute Players
const addSubs = (substitutes, squadID) => __awaiter(void 0, void 0, void 0, function* () {
    for (const position of Object.keys(substitutes)) {
        const addPlayer = yield db_1.pool.query('INSERT INTO substitutes (squad_id, player_id, position) VALUES ($1, $2, $3)', [squadID, substitutes[position].player_id, position]);
    }
});
// add Reserve Players
const addReserves = (reserves, squadID) => __awaiter(void 0, void 0, void 0, function* () {
    for (const player of reserves) {
        const addPlayer = yield db_1.pool.query('INSERT INTO reserves (squad_id, player_id) VALUES ($1, $2)', [squadID, player.player_id]);
    }
});
// save a new squad
exports.saveSquad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID, squadName, formation } = req.body[0];
        const { firstTeam, substitutes, reserves } = req.body[1];
        const addSquad = yield db_1.pool.query('INSERT INTO squads (user_id, formation, squad_name) VALUES($1, $2, $3) RETURNING id', [userID, formation, squadName]);
        const squadID = addSquad.rows[0].id;
        addFirstTeam(firstTeam, squadID);
        addSubs(substitutes, squadID);
        addReserves(reserves, squadID);
        res.json(squadID);
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
// save an updated squad
const getSquadObject = (squad_id) => __awaiter(void 0, void 0, void 0, function* () {
    // query first team players and create matching first team object for front end
    const firstTeamObject = {};
    const firstTeamQuery = yield db_1.pool.query('select player_id, firstTeam.position, known_as, best_position, overall, fifa23.id, image_link FROM squads inner join firstTeam on squads.id = firstteam.squad_id inner join fifa23 on firstTeam.player_id = fifa23.id WHERE squads.id = $1 ORDER BY firstteam.position_order', [squad_id]);
    for (const player of firstTeamQuery.rows) {
        firstTeamObject[player.position] = {
            name: player.known_as,
            position: player.best_position,
            ovr: player.overall,
            player_id: player.player_id,
            player_photo: player.image_link,
        };
    }
    // query substitute players & create matching sub object for frontend
    const substituteObject = {};
    const substituteQuery = yield db_1.pool.query('select squad_id, player_id, substitutes.position, known_as, best_position, overall, fifa23.id, image_link FROM squads inner join substitutes on squads.id = substitutes.squad_id inner join fifa23 on substitutes.player_id = fifa23.id WHERE squads.id = $1', [squad_id]);
    for (const player of substituteQuery.rows) {
        substituteObject[player.position] = {
            name: player.known_as,
            position: player.best_position,
            ovr: player.overall,
            player_id: player.player_id,
            player_photo: player.image_link,
        };
    }
    // query reserves, can send as is
    const reservesQuery = yield db_1.pool.query('select known_as, best_position, overall, fifa23.id, image_link FROM squads inner join reserves on squads.id = reserves.squad_id inner join fifa23 on reserves.player_id = fifa23.id WHERE squads.id = $1', [squad_id]);
    const squadInfo = yield db_1.pool.query('SELECT squad_name, formation from squads where id = $1', [squad_id]);
    const roster = {
        firstTeam: firstTeamObject,
        substitutes: substituteObject,
        reserves: reservesQuery.rows,
    };
    const returnObj = {
        squadInfo: {
            squad_id: squad_id,
            squad_name: squadInfo.rows[0].squad_name,
            formation: squadInfo.rows[0].formation,
        },
        roster: roster,
    };
    return returnObj;
});
// get a specific squad
exports.getSpecificSquad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const squadID = req.params.id;
        const roster = yield getSquadObject(Number(squadID));
        res.json(roster);
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
// get all squads
exports.getAllSquads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const squadIdQuery = yield db_1.pool.query('SELECT id from squads', []);
        const rosterArray = [];
        for (const squadIdObject of squadIdQuery.rows) {
            const roster = yield getSquadObject(squadIdObject.id);
            rosterArray.push(roster);
        }
        res.json(rosterArray);
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
// get all squads
exports.getUsersSquads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const squadIdQuery = yield db_1.pool.query('SELECT id from squads where user_id = $1', [req.params.user]);
        console.log(squadIdQuery.rows);
        const rosterArray = [];
        for (const squadIdObject of squadIdQuery.rows) {
            const roster = yield getSquadObject(squadIdObject.id);
            rosterArray.push(roster);
        }
        res.json(rosterArray);
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
