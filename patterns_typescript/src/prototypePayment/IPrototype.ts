import { IPaymentDTO } from './IPaymentDTO'

interface IPrototype {
    getType(): IPaymentDTO
    getAmount(): number
    shallowCopy(): IPrototype
    deepCopy(): IPrototype
}

export { IPrototype }
