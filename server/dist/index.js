"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
// init express
const app = (0, express_1.default)();
// cors for connecting front end / express.json=
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// grab secret variables from .env
dotenv_1.default.config();
const port = process.env.port;
// router variables
const playersRouter = require('./routes/players');
const squadsRouter = require('./routes/squads');
// init routers
app.use('/players', playersRouter);
app.use('/squads', squadsRouter);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Servers');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
module.exports = app;
