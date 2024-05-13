import { games} from "./store";
import { startLogger } from "./logger";
startLogger()

setInterval(()=>{
    games.push({
        id:Math.random().toString(),
whitePlayerName:'sangeeta',
blackPlayerName:"varsha",
moves:[]
    })
},5000)

// ws server
