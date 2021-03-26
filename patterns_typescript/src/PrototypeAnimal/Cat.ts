import { IAnimal } from './IAnimal'

class Cat implements IAnimal {
    private type: string = 'Cat'
    private sound: string = 'Miau'

    public getType(): string {
        return this.type
    }

    public makeSound(): string {
        return this.sound
    }

    public setSound(sound: string): void {
        this.sound = sound
    }

    public clone(): IAnimal {
        return this
    }
}

export { Cat }
