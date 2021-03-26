import { ProductLeaf } from './implementations/ProductLeaf'
import { ProductComposite } from './implementations/ProductComposite'

class Main {
    public static run() {
        const bean = new ProductLeaf('bean', 200)

        bean.getResume()

        const rice = new ProductLeaf('rice', 320)
        const spaghetti = new ProductLeaf('spaghetti', 150)

        const cart_a = new ProductComposite(bean, rice, spaghetti)

        cart_a.getResume()
    }
}

Main.run()
