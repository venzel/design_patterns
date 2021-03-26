import { IPayment } from './IPayment'
import { IStrategyDTO } from './IStrategyDTO'
import { PayPal } from './PayPal'
import { Stripe } from './Stripe'

class PaymentStrategy {
    private payment: IPayment
    private amount: number

    constructor(strategy: IStrategyDTO, amount: number) {
        this.setStrategy(strategy)
        this.amount = amount
    }

    public getStrategy(): void {
        console.log(`Now, strategy is: ${this.payment.getName()}`)
        console.log(`Amount total: ${this.payment.pay()}`)
    }

    public setStrategy(strategy: IStrategyDTO): void {
        const state = {
            PayPal: (amount: number) => new PayPal(amount),
            Stripe: (amount: number) => new Stripe(amount),
        }

        if (!state.hasOwnProperty(strategy)) throw new Error('Insert valid strategy!')

        this.payment = state[strategy](this.amount)
    }
}

export { PaymentStrategy }
