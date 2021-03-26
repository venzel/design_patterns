import { IProduct } from '../../contracts/IProduct'
import { IVisitor } from '../../contracts/IVisitor'

class PriceHolidayVisitor implements IVisitor {
    public visit(product: IProduct): Object {
        return product.getTitle() + 'Black'
    }
}

export { PriceHolidayVisitor }
