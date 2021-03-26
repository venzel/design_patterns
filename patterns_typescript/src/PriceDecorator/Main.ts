import { Product } from './implements/Product'
import { PriceProduct } from './implements/PriceProduct'
import { PriceProductRates } from './implements/PriceProductRates'
import { PriceProductRatified } from './implements/PriceProductRetified'

class Main {
    static run() {
        const product = new Product('Bean', 10)

        const priceProduct = new PriceProductRatified(new PriceProductRates(new PriceProduct()))

        console.log(`---------------------`)
        console.log(`Original: R$ ${product.price.toFixed(2)}`)
        console.log(`Value final: R$ ${priceProduct.valueFinal(product).toFixed(2)}`)
        console.log(`---------------------`)
    }
}

Main.run()
