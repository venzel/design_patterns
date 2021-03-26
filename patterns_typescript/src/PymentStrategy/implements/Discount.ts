import { IDiscount } from '../contracts/IDiscount'

abstract class Discount implements IDiscount {
    private name: string
    private discount: number

    constructor(name: string, discount: number) {
        this.name = name
        this.discount = discount
    }

    public getName(): string {
        return this.name
    }

    public getDiscount(): number {
        return this.discount
    }

    public abstract calculate(amount: number): number
}

export { Discount }
