import { IShipping } from '../models/IShipping'

class ShippingGenericAdapter implements IShipping {
    private shipping: IShipping

    constructor(shipping: IShipping) {
        this.shipping = shipping
    }

    public calculate(amount: number): number {
        return this.shipping.calculate(amount)
    }
}

export { ShippingGenericAdapter }
