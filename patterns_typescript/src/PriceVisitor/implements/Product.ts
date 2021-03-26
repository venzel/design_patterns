import { IProduct } from '../contracts/IProduct'
import { IVisitable } from '../contracts/IVisitable'
import { IVisitor } from '../contracts/IVisitor'

abstract class Product implements IProduct, IVisitable {
    private title: string
    private price: number

    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    public accept(visitor: IVisitor): Object {
        return visitor.visit(this)
    }

    public getTitle(): string {
        return this.title
    }

    public getPrice(): number {
        return this.price
    }
}

export { Product }
