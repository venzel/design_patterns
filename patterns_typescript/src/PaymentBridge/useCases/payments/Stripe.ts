import { IPayment } from '../../shared/IPayment'
import { ApiStripe } from './providers/ApiStripe'

class Stripe implements IPayment {
    private api: ApiStripe = new ApiStripe()

    public pay(): string {
        return this.api.makePay()
    }
}

export { Stripe }
