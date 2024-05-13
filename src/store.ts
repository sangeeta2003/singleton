interface Game{
    id:string;
    whitePlayerName:string;
    blackPlayerName:string;
    moves:string[];

}




export class Gamemanager{
    games:Game[] = [];
    constructor(){
        this.games=[];
    }
    addmove(gameId:string,move:string){
        console.log(`adding move ${move} to game ${gameId}`)
        const game = this.games.find(game =>game.id === gameId);
        game?.moves.push(move)
    }
}

