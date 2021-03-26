import { AnimalRepository } from './AnimalRepository'

class Main {
    public static run(): void {
        AnimalRepository.setup()

        const cloneCat = AnimalRepository.create('cat')

        console.log(cloneCat)
    }
}

Main.run()
