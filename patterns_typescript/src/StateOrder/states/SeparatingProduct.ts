import { IState } from '../IState'
import { AwaitingPayment } from './AwaitingPayment'
import { PaymentConfirmed } from './PaymentConfirmed'
import { ProductShipped } from './ProductShipped'

class SeparatingProduct implements IState {
    awaitingPayment(): IState {
        return new AwaitingPayment()
    }

    paymentConfirmed(): IState {
        return new PaymentConfirmed()
    }

    separatingProduct(): IState {
        return this
    }

    productShipped(): IState {
        return new ProductShipped()
    }

    status(): void {
        console.log(`Separating product`)
    }
}

export { SeparatingProduct }
