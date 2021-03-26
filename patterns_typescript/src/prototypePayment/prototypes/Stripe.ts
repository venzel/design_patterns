import { IPrototype } from '../IPrototype'
import { Payment } from './Payment'
import { IPaymentDTO } from '../IPaymentDTO'

class Stripe extends Payment {
    protected type: IPaymentDTO = 'stripe'

    public shallowCopy(): IPrototype {
        return this
    }

    public deepCopy(): IPrototype {
        return new Stripe(this.amount)
    }
}

export { Stripe }
