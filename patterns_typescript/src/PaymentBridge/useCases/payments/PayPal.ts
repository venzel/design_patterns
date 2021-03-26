import { IPayment } from '../../shared/IPayment'
import { ApiPayPal } from './providers/ApiPayPal'

class PayPal implements IPayment {
    private api: ApiPayPal = new ApiPayPal()

    public pay(): string {
        return this.api.makePay()
    }
}

export { PayPal }
