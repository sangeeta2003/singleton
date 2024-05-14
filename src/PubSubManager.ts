export class PubSubManager{
    private static instance:PubSubManager;
    private constructor(){

    }
    public static getInstance():PubSubManager{
        if(!PubSubManager.instance){
            PubSubManager.instance= new PubSubManager()
        }
        return PubSubManager.instance;
    }
    addUserToStock(userId:string,stockTicker:string){

    }
    removeUserFromStock(userId:string,stockTicker:string){

    }
    frowardMessageTouser(userId:string,stockTicker:string,price:string){
        
    }
}