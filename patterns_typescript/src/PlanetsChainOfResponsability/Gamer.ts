import { IGamer } from './IGamer'

class Gamer implements IGamer {
    private name: string
    private stars: number
    private history: Map<string, number>

    constructor(name: string) {
        this.name = name
        this.stars = 0
        this.history = new Map<string, number>()
    }

    setStars(stars: number): void {
        this.stars += stars
    }

    getStars(): number {
        return this.stars
    }

    getName(): string {
        return this.name
    }

    addToHistory(stage: string, stars: number): void {
        this.history.set(stage, stars)
    }

    getHistory(): void {
        console.log(this.history)
        let total = 0
        this.history.forEach((value, key) => (total += value))
        console.log(total, 'stars')
    }
}

export { Gamer }
