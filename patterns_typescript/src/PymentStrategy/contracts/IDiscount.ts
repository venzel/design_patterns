interface IDiscount {
    getName(): string
    getDiscount(): number
    calculate(amount: number): number
}

export { IDiscount }
