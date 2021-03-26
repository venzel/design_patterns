import { CarSale } from './useCases/sales/CarSale'
import { PayPal } from './useCases/payments/PayPal'
import { Stripe } from './useCases/payments/Stripe'

class Main {
    public static run() {
        const sale = new CarSale(new PayPal())

        sale.makePayment()
    }
}

Main.run()
