"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
const gamemanager = new store_1.Gamemanager();
function startLogger() {
    setInterval(() => {
        console.log(gamemanager.log());
    }, 500);
}
exports.startLogger = startLogger;
