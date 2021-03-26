import { IPriceProductDecorator } from '../../Decorator/contracts/IPriceProductDecorator'
import { IProduct } from '../contracts/IProduct'

class PriceProduct implements IPriceProductDecorator {
    public valueFinal(product: IProduct): number {
        return product.price
    }
}

export { PriceProduct }
