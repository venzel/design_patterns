import { GenericPayment } from './GenericPayment'

class PayPal extends GenericPayment {
    constructor(amount: number) {
        super('PayPal', amount)
    }

    public pay(): number {
        return super.getAmount() + 40
    }
}

export { PayPal }
