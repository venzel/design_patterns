import { IProduct } from '../../contracts/IProduct'
import { IVisitor } from '../../contracts/IVisitor'

class PriceInStoreVisitor implements IVisitor {
    visit(product: IProduct): number {
        return product.getPrice() + 10
    }
}

export { PriceInStoreVisitor }
