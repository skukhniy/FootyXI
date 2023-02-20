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
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
// save a new squad
exports.saveSquad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(req.body);
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
