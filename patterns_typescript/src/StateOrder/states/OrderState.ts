import { IState } from '../IState'
import { PaymentConfirmed } from './PaymentConfirmed'
import { SeparatingProduct } from './SeparatingProduct'
import { ProductShipped } from './ProductShipped'
import { AwaitingPayment } from './AwaitingPayment'

class OrderState implements IState {
    awaitingPayment(): IState {
        return new AwaitingPayment()
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
        console.log(`Process payment`)
    }
}

export { OrderState }
