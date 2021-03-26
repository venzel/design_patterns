import { Thief } from "./observables/Thief"
import { Detective } from "./observers/Detective"
import { FBI } from "./observers/FBI"

class Main {
    public static run(): void {
        const thief = new Thief()
        const detective = new Detective()
        const fbi = new FBI()

        thief.subscribe(detective)
        thief.subscribe(fbi)

        thief.move('Left')
        thief.move('Right')
    }
}

Main.run()
