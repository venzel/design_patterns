import { Mediator } from './Mediator'
import { Player } from './Player'

class Main {
    public static run(): void {
        const mediator = new Mediator()

        const jibo = new Player('jibo', mediator)
        const kalo = new Player('kalo', mediator)
        const bile = new Player('bile', mediator)

        mediator.subscribe(jibo, kalo, bile)

        bile.sendMessage('bora grude!!!')
    }
}

Main.run()
