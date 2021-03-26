import { IProduct } from './IProduct'

interface IPriceProductDecorator {
    valueFinal(product: IProduct): number
}

export { IPriceProductDecorator }
