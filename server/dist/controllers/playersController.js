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
// getPlayers
// getPlayer(specific)
// player search - squad builder
exports.playerSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryName = `%${req.query.name}%`;
        const searchResult = yield db_1.pool.query('SELECT full_name, known_as, overall, potential, best_position, image_link, club_name, national_team_image_link, id FROM fifa23 WHERE full_name LIKE $1 LIMIT 50', [queryName]);
        res.json(searchResult.rows);
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
