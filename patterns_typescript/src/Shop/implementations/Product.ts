import { IProduct } from '../models/IProduct'
import { IProductComponent } from '../../Composite/models/IProductComponent'

class Product implements IProduct {
    constructor(public title: string, public price: number) {}

    public getTitle(): string {
        return this.title
    }

    getPrice(): number {
        return this.price
    }
}

export { Product }
