import { IState } from '../IState'
import { PaymentConfirmed } from './PaymentConfirmed'
import { SeparatingProduct } from './SeparatingProduct'
import { ProductShipped } from './ProductShipped'

class AwaitingPayment implements IState {
    awaitingPayment(): IState {
        return this
    }

    paymentConfirmed(): IState {
        return new PaymentConfirmed()
    }

    separatingProduct(): IState {
        return new SeparatingProduct()
    }

    productShipped(): IState {
        return new ProductShipped()
    }

    status(): void {
        console.log(`Awaiting payment`)
    }
}

export { AwaitingPayment }
