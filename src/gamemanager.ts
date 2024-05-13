interface Game{
    id:string;
    whitePlayer:string;
    blackPlayer:string;
    move:string[];


}

export class Gamemanager{
    private static instance :Gamemanager;
    private games:Game[] = [];

    private constructor(){
        // private constructor ensures that a new instance can't be create from outside
    }
    public static getInstance():Gamemanager{
        if(!Gamemanager.instance){
            Gamemanager.instance = new Gamemanager();
        }
        return Gamemanager.instance;
    }
    public addGame(game:Game){
        this.games.push(game);
    }
    public getGame(){
        return this.games;
    }
    public addMove(gameId:string,move:string){
        const game = this.games.find(game =>game.Id === gameId);
        if(game){
            game.moves.push(move);
        }
    }
    public logState(){
        console.log(this.games);
    }
}


