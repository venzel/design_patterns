import { IProduct } from '../models/IProduct'

class Product implements IProduct {
    constructor(public name: string, public price: number) {}
}

export { Product }
