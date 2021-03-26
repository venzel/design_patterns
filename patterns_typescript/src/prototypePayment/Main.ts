import { PaymentRepository } from './PaymentRepository'

class Main {
    public static run(): void {
        PaymentRepository.setup(100)

        const paypal = PaymentRepository.create('paypal')

        console.log(paypal)
    }
}

Main.run()
