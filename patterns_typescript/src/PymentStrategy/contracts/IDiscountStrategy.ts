import { IDiscount } from './IDiscount'

interface IDiscountStrategy {
    calculate(amount: number): number
    setStrategy(strategy: IDiscount): void
}

export { IDiscountStrategy }
