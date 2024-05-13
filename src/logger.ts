import { gamemanager } from "./store";

export function startLogger(){
    setInterval(()=>{
        console.log(gamemanager.log());
     },500)
}
 