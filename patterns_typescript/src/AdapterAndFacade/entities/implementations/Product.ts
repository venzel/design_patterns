import { IProduct } from '../models/IProduct'

class Product implements IProduct {
    public title: string
    public price: number

    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }

    public getTitle(): string {
        return this.title
    }

    public getPrice(): number {
        return this.price
    }
}

export { Product }
