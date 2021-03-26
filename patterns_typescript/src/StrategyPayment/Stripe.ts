import { GenericPayment } from './GenericPayment'

class Stripe extends GenericPayment {
    constructor(amount: number) {
        super('Stripe', amount)
    }

    public pay(): number {
        return super.getAmount() + 15
    }
}

export { Stripe }
