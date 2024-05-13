
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
    addGame(gameId:string){
        const game = {
            id:gameId,
            whitePlayername:'sangeeta',
            blackPlayername:'varsha',
            moves:[]
        }
        this.games.push(game);
    }
    log(){
        console.log(this.games);
    }
}

