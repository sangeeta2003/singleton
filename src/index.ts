import { Gamemanager} from "./store";
import { startLogger } from "./logger";

const gamemanager = new Gamemanager();
startLogger();
setInterval(()=>{

    gamemanager.addGame(Math.random().toString())
},5000)
// ws server
