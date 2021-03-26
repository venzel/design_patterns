import { IPrototype } from '../IPrototype'
import { Payment } from './Payment'
import { IPaymentDTO } from '../IPaymentDTO'

class Paypal extends Payment {
    protected type: IPaymentDTO = 'paypal'

    public shallowCopy(): IPrototype {
        return this
    }

    public deepCopy(): IPrototype {
        return new Paypal(this.amount)
    }
}

export { Paypal }
