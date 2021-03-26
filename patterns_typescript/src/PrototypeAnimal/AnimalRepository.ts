import { IAnimal } from './IAnimal'
import { Cat } from './Cat'
import { Duck } from './Duck'
import { IAnimalDTO } from './IAnimalDTO'

class AnimalRepository {
    private static prototypes: Map<IAnimalDTO, IAnimal> = new Map<IAnimalDTO, IAnimal>()

    public static create(animalType: IAnimalDTO): IAnimal | undefined {
        return this.prototypes.get(animalType)?.clone()
    }

    public static setup(): void {
        this.prototypes.set('cat', new Cat())
        this.prototypes.set('duck', new Duck())
    }
}

export { AnimalRepository }
