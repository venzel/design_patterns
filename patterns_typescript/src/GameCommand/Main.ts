import { Game } from './Game'
import { Null } from './commands/Null'
import { Down } from './commands/Down'
import { Up } from './commands/Up'
import { Left } from './commands/Left'
import { Right } from './commands/Right'

class Main {
    public static run() {
        const gameCommand = new Game()
        gameCommand.do(new Down())
        gameCommand.do(new Up())
        gameCommand.do(new Left())
        gameCommand.do(new Right())
        gameCommand.do(new Down())
        console.log('Last action:', gameCommand.getCommand())
        console.log(gameCommand.getHistory())

        gameCommand.process()
    }
}

Main.run()
