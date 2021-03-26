import { IDiscount } from '../contracts/IDiscount'
import { IDiscountStrategy } from '../contracts/IDiscountStrategy'

class DiscountStrategy implements IDiscountStrategy {
    private strategy: IDiscount
    private amount: number

    constructor(strategy: IDiscount) {
        this.strategy = strategy
    }

    public setStrategy(strategy: IDiscount): void {
        this.strategy = strategy
    }

    public calculate(amount: number): number {
        this.amount = amount
        return this.strategy.calculate(amount)
    }

    public print(): void {
        console.log(`---------------------------------`)
        console.log(`Strategy: ${this.strategy.getName()}`)
        console.log(`Amount: R$ ${this.amount.toFixed(2)}`)
        console.log(
            `Discount (${this.strategy.getDiscount()}%): R$ ${this.calculate(this.amount).toFixed(2)}`
        )
        console.log(`---------------------------------`)
    }
}

export { DiscountStrategy }
