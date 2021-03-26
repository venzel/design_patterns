import { IShipping } from '../../models/IShipping'

class ApiFedex implements IShipping {
    public calculate(amount: number): number {
        return 15
    }
}

export { ApiFedex }
