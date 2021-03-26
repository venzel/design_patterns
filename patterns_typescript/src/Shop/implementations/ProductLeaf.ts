import { IProductComponent } from '../models/IProductComponent'
import { Product } from './Product'

class ProductLeaf extends Product implements IProductComponent {
    constructor(public title: string, public price: number) {
        super(title, price)
    }

    public getProducts(): string {
        return super.getTitle()
    }

    public getAmount(): number {
        return super.getPrice()
    }

    public getResume(): void {
        console.log(`Product: ${super.getTitle()}`)
        console.log(`Price: ${super.getPrice()}`)
    }
}

export { ProductLeaf }
