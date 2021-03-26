import { IGamer } from './IGamer'

class Gamer implements IGamer {
    private name: string
    private stars: number
    private history: Map<string, number>

    constructor(name: string, stars: number) {
        this.name = name
        this.stars = stars
        this.history = new Map<string, number>()
    }

    public setHistory(stage: string, stars: number): void {
        this.history.set(stage, stars)
    }

    public getHistory(): void {
        console.log(this.history)
    }

    public getName(): string {
        return this.name
    }

    public getStars(): number {
        return this.stars
    }

    public addStars(amount: number): void {
        this.stars += amount
    }
}

export { Gamer }
