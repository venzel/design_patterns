import { Thief } from './observables/Thief'
import { Detective } from './observers/Detective'
import { FBI } from './observers/FBI'

class Main {
    public static run(): void {
        const thief = new Thief()

        thief.subscribe(new Detective())
        thief.subscribe(new FBI())

        thief.move('Left')
    }
}

Main.run()
