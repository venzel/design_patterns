import { Product } from './implements/Product'
import { PriceProduct } from './implements/PriceProduct'
import { PriceProductWithImposts } from './implements/PriceProductWithImposts'

class Main {
    public static run() {
        const product = new Product('Bean', 8)

        const priceProdcut = new PriceProductWithImposts(new PriceProduct())

        const price = priceProdcut.valueFinal(product)

        console.log(price)
    }
}

Main.run()
