import { Product } from '../Product'

class Car extends Product {
    constructor(title: string, price: number) {
        super(title, price)
    }
}

export { Car }
