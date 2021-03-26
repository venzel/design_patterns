import { Gamer } from './Gamer'
import { StarsAccumulated } from './StarsAccumulated'

class Main {
    public static run(): void {
        const gamer = new Gamer('Tiago', 0)
        const accumulated = new StarsAccumulated()
        accumulated.accumulated(gamer)
    }
}

Main.run()
