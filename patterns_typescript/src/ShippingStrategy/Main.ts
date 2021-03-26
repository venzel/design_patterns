import { ShippingStrategy } from './implements/ShippingStrategy'

class Main {
    public static run(): void {
        const shipping = new ShippingStrategy('fedex')

        shipping.setStrategy('jadlog')

        console.log(shipping.calculate(200))
    }
}

Main.run()
