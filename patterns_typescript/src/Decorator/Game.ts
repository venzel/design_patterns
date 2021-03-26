class Game {
    private name: string
    private age: number

    constructor(name: string) {
        this.name = name
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }
}
