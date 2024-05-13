"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        console.log(store_1.gamemanager.log());
    }, 500);
}
exports.startLogger = startLogger;
