import { IPriceProductDecorator } from '../contracts/IPriceProductDecorator'
import { IProduct } from '../contracts/IProduct'

class PriceProduct implements IPriceProductDecorator {
    public valueFinal(product: IProduct): number {
        return product.price
    }
}

export { PriceProduct }
