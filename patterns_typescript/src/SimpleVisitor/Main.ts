import { Product } from './implements/Product'
import { PriceInStoreVisitor } from './implements/visitors/PriceInStoreVisitor'

class Main {
    public static run(): void {
        const product = new Product('Gear', 10)
        const priceInStore = new PriceInStoreVisitor()
        console.log(product.accept(priceInStore))
    }
}

Main.run()
