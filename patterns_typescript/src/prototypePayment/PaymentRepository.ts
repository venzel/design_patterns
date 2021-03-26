import { IPrototype } from './IPrototype'
import { IPaymentDTO } from './IPaymentDTO'
import { Paypal } from './prototypes/Paypal'
import { Stripe } from './prototypes/Stripe'

class PaymentRepository {
    private static paymentRepository: Map<IPaymentDTO, IPrototype> = new Map<IPaymentDTO, IPrototype>()

    public static setup(amount: number): void {
        this.paymentRepository.set('paypal', new Paypal(amount))
        this.paymentRepository.set('stripe', new Stripe(amount))
    }

    public static create(paymentType: IPaymentDTO): IPrototype | undefined {
        console.log(this.paymentRepository)
        return this.paymentRepository.get(paymentType)?.shallowCopy()
    }
}

export { PaymentRepository }
