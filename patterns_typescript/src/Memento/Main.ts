import { CareTaker } from './CareTaker'
import { Originator } from './Originator'

class Main {
    public static run(): void {
        const originator = new Originator('png')
        const careTaker = new CareTaker(originator)

        originator.setState('gif')
        // careTaker.backup()

        // originator.setState('jpg')
        // careTaker.backup()

        careTaker.show()
    }
}

Main.run()
