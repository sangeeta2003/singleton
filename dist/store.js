"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamemanager = exports.Gamemanager = void 0;
class Gamemanager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addmove(gameId, move) {
        console.log(`adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'sangeeta',
            blackPlayerName: 'varsha',
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.Gamemanager = Gamemanager;
exports.gamemanager = new Gamemanager();
