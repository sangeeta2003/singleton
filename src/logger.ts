import { Gamemanager } from "./store";
const gamemanager = new Gamemanager();
export function startLogger(){
    setInterval(()=>{
        console.log(gamemanager.log());
     },500)
}
 