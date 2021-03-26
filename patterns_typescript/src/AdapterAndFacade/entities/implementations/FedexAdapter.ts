import { IShipping } from '../models/IShipping'
import { ApiFedex } from '../providers/Shipping/ApiFedex'

class FedexAdapter implements IShipping {
    private apiFedex: IShipping = new ApiFedex()

    public calculate(amount: number): number {
        return this.apiFedex.calculate(amount) + 5
    }
}

export { FedexAdapter }
