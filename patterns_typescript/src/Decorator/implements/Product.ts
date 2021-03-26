import { IProduct } from '../contracts/IProduct'

class Product implements IProduct {
    public title: string
    public price: number

    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }
}

export { Product }
