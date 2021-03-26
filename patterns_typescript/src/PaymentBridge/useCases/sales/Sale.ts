import { IPayment } from '../../shared/IPayment'

abstract class Sale {
    protected payment: IPayment

    constructor(payment: IPayment) {
        this.payment = payment
    }

    public abstract makePayment(): void
}

export { Sale }
