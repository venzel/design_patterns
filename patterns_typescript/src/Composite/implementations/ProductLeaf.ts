import { IProductComponent } from '../models/IProductComponent'
import { Product } from '../../AdapterAndFacade/entities/implementations/Product'

class ProductLeaf extends Product implements IProductComponent {
    constructor(name: string, price: number) {
        super(name, price)
    }

    public getProducts(): string {
        return super.getTitle()
    }

    public getAmount(): number {
        return super.getPrice()
    }
}

export { ProductLeaf }
