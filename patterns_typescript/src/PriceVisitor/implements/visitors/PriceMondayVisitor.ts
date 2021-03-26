import { IProduct } from '../../contracts/IProduct'
import { IVisitor } from '../../contracts/IVisitor'

class PriceMondayVisitor implements IVisitor {
    public visit(product: IProduct): number {
        return product.getPrice() + 200
    }
}

export { PriceMondayVisitor }
