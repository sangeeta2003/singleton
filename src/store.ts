
interface Game{
    id:string;
    whitePlayerName:string;
    blackPlayerName:string;
    moves:string[];

}


// singleton
// adapter pattern,factory pattern


export class Gamemanager{
    games:Game[] = [];
    private static instance:Gamemanager;

    private constructor(){
        this.games=[];
    }
static getInstance(){
    if(Gamemanager.instance){
        return Gamemanager.instance

    }
    Gamemanager.instance = new Gamemanager();
    return Gamemanager.instance;
}


    addmove(gameId:string,move:string){
        console.log(`adding move ${move} to game ${gameId}`)
        const game = this.games.find(game =>game.id === gameId);
        game?.moves.push(move)
    }
    addGame(gameId:string){
        const game = {
            id:gameId,
            whitePlayerName:'sangeeta',
            blackPlayerName:'varsha',
            moves:[]
        }
        this.games.push(game);
    }
    log(){
        console. log(this.games);
    }
}
 export const gamemanager =  Gamemanager.getInstance();
