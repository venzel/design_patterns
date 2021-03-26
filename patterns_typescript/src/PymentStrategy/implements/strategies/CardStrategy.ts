import { Discount } from '../Discount'

class CardStrategy extends Discount {
    constructor() {
        super('CARD', 5)
    }

    public calculate(amount: number): number {
        return amount * (this.getDiscount() / 100)
    }
}

export { CardStrategy }
