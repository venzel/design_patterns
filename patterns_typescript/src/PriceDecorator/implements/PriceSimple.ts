import { IPriceProductDecorator } from '../contracts/IPriceProductDecorator'
import { IProduct } from '../contracts/IProduct'

class PriceSimple implements IPriceProductDecorator {
    private decore: IPriceProductDecorator

    constructor(decore: IPriceProductDecorator) {
        this.decore = decore
    }

    public valueFinal(product: IProduct): number {
        return this.decore.valueFinal(product)
    }
}

export { PriceSimple }
