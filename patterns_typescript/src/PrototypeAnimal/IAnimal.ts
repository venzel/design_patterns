interface IAnimal {
    getType(): string
    makeSound(): string
    clone(): IAnimal
    setSound(sound: string): void
}

export { IAnimal }
