"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gamemanager = void 0;
class Gamemanager {
    constructor() {
        this.games = [];
        // private constructor ensures that a new instance can't be create from outside
    }
    static getInstance() {
        if (!Gamemanager.instance) {
            Gamemanager.instance = new Gamemanager();
        }
        return Gamemanager.instance;
    }
    addGame(game) {
        this.games.push(game);
    }
    getGame() {
        return this.games;
    }
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.move.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
}
exports.Gamemanager = Gamemanager;
