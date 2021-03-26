import { PaymentStrategy } from './PaymentStrategy'

class Main {
    public static run(): void {
        const payment = new PaymentStrategy('Stripe', 400)
        payment.setStrategy('PayPal')
        payment.getStrategy()
    }
}

Main.run()
