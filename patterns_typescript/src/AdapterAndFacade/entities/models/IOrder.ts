import { ICostumer } from './ICostumer'
import { IProduct } from './IProduct'
import { IShipping } from './IShipping'

interface IOrder {
    costumer: ICostumer
    products: Array<IProduct>
    shipping: IShipping

    amount(): number
    calculateShipping(): number
    print(): void
}

export { IOrder }
