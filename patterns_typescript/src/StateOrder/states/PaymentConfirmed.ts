import { IState } from '../IState'
import { AwaitingPayment } from './AwaitingPayment'
import { SeparatingProduct } from './SeparatingProduct'
import { ProductShipped } from './ProductShipped'

class PaymentConfirmed implements IState {
    awaitingPayment(): IState {
        return new AwaitingPayment()
    }

    paymentConfirmed(): IState {
        return this
    }

    separatingProduct(): IState {
        return new SeparatingProduct()
    }

    productShipped(): IState {
        return new ProductShipped()
    }

    status(): void {
        console.log(`Payment confirmed`)
    }
}

export { PaymentConfirmed }
