"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
const gamemanager = new store_1.Gamemanager();
(0, logger_1.startLogger)();
setInterval(() => {
    gamemanager.addGame(Math.random().toString());
}, 5000);
// ws server
