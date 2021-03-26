import { IAnimal } from './IAnimal'

class Duck implements IAnimal {
    private type: string = 'Duck'
    private sound: string = 'Kue'

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

export { Duck }
