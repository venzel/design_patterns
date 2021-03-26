import { Sale } from './Sale'

class BikeSale extends Sale {
    public makePayment(): void {
        console.log(this.payment.pay())
    }
}

export { BikeSale }
