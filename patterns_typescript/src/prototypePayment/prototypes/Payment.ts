import { IPrototype } from '../IPrototype'
import { IPaymentDTO } from '../IPaymentDTO'

abstract class Payment implements IPrototype {
    protected type: IPaymentDTO
    protected amount: number

    constructor(amount: number) {
        this.amount = amount
    }

    public getType(): IPaymentDTO {
        return this.type
    }

    public getAmount(): number {
        return this.amount
    }

    public abstract shallowCopy(): IPrototype
    public abstract deepCopy(): IPrototype
}

export { Payment }
