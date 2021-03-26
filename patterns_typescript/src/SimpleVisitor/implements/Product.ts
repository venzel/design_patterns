import { IProduct } from '../contracts/IProduct'
import { IVisitor } from '../contracts/IVisitor'

class Product implements IProduct {
    private title: string
    private price: number

    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    accept(visitor: IVisitor): Object {
        return visitor.visit(this)
    }

    getTitle(): string {
        return this.title
    }

    getPrice(): number {
        return this.price
    }
}

export { Product }
