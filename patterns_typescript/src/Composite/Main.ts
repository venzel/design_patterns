import { CartComposite } from './implementations/CartComposite'
import { ProductLeaf } from './implementations/ProductLeaf'

class Main {
    public static run() {
        const bean = new ProductLeaf('bean', 3)
        const rice = new ProductLeaf('rice', 5)
        const spaghetti = new ProductLeaf('spaghetti', 8)

        const cart_a = new CartComposite(bean, rice, spaghetti)

        cart_a.resume()

        const beef = new ProductLeaf('beef', 20)
        const butter = new ProductLeaf('butter', 2)
        const oats = new ProductLeaf('oats', 5)

        const cart_b = new CartComposite(cart_a, beef, butter, oats)

        cart_b.resume()
    }
}

Main.run()
