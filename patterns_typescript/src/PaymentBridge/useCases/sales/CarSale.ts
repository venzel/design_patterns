import { Sale } from './Sale'

class CarSale extends Sale {
    public makePayment(): void {
        console.log(this.payment.pay())
    }
}

export { CarSale }
