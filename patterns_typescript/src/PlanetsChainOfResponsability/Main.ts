import { Gamer } from './Gamer'
import { StageFacade } from './StageFacade'

class Main {
    public static run(): void {
        const stage = new StageFacade()
        stage.execute(new Gamer('Tiago'))
    }
}

Main.run()
