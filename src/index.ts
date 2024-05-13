import { gamemanager} from "./store";
import { startLogger } from "./logger";


startLogger();
setInterval(()=>{

    gamemanager.addGame(Math.random().toString())
},5000)
// ws server
