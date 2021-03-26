import { IPriceProductDecorator } from '../contracts/IPriceProductDecorator'
import { IProduct } from '../contracts/IProduct'

class PriceProductRates implements IPriceProductDecorator {
    private decore: IPriceProductDecorator

    constructor(decore: IPriceProductDecorator) {
        this.decore = decore
    }

    public valueFinal(product: IProduct): number {
        const valueFinal = this.decore.valueFinal(product)
        return valueFinal * 0.1 + valueFinal
    }
}

export { PriceProductRates }
