interface IGamer {
    getName(): string
    addToHistory(stage: string, stars: number): void
    getHistory(): void
    setStars(stars: number): void
    getStars(): number
}

export { IGamer }
