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
// // get all posts
// exports.getPosts = async (req, res) => {
// 	try {
// 		const posts = await Post.find();
// 		res.json(posts);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// 	// res.json("Get Posts");
// };
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
        res.json('player search');
    }
    catch (error) {
        res.status(500).json({ message: getErrorMessage(error) });
    }
});
