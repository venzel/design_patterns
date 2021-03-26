import { Discount } from '../Discount'

class CashStrategy extends Discount {
    constructor() {
        super('CASH', 10)
    }

    public calculate(amount: number): number {
        return amount * (this.getDiscount() / 100)
    }
}

export { CashStrategy }
