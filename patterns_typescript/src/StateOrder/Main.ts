import { OrderState } from './states/OrderState'

class Main {
    public static run() {
        let state = new OrderState()

        state = state.awaitingPayment()
        state = state.paymentConfirmed()
        state = state.separatingProduct()
        state = state.productShipped()

        state.status()
    }
}

Main.run()
