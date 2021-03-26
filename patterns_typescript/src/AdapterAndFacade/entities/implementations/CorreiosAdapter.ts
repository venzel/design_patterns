import { IShipping } from '../models/IShipping'
import { ApiCorreios } from '../providers/Shipping/ApiCorreios'

class CorreiosAdapter implements IShipping {
    private apiCorreios: IShipping = new ApiCorreios()

    public calculate(amount: number): number {
        return this.apiCorreios.calculate(amount) + 7
    }
}

export { CorreiosAdapter }
