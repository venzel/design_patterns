import { Mario } from './states/Mario'
import { IStateMario } from './IStateMario'

class Main {
    public static run() {
        let state: IStateMario = new Mario()
        state = state.getFlower()
        state = state.getStar()

        state.state()
    }
}

Main.run()
