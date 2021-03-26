import { IOrder } from '../models/IOrder'
import { ICostumer } from '../models/ICostumer'
import { IProduct } from '../models/IProduct'
import { IShipping } from '../models/IShipping'

class Order implements IOrder {
    public costumer: ICostumer
    public products: IProduct[]
    public shipping: IShipping

    constructor(costumer: ICostumer, products: IProduct[], shipping: IShipping) {
        this.costumer = costumer
        this.products = products
        this.shipping = shipping
    }

    public amount(): number {
        return this.products.reduce((total, next) => total + next.price, 0)
    }

    public calculateShipping(): number {
        return this.shipping.calculate(this.amount())
    }

    public print(): void {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~')

        console.log(`Name: ${this.costumer.name}`)

        console.log(`\nProducts:`)
        this.products.forEach((product) => {
            console.log(`${product.title} | R$ ${product.price.toFixed(2)}`)
        })

        console.log(`\nShipping calculate: R$ ${this.calculateShipping().toFixed(2)}`)

        console.log(`\nTotal: R$ ${(this.amount() + this.calculateShipping()).toFixed(2)}`)

        console.log('~~~~~~~~~~~~~~~~~~~~~~~')
    }
}

export { Order }
