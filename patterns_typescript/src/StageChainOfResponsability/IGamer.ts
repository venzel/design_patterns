import { IStage } from './stages/IStage'

interface IGamer {
    getStars(): number
    addStars(amount: number): void
    getName(): string
    getHistory(): void
    setHistory(stage: string, stars: number): void
}

export { IGamer }
