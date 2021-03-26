import { IPayment } from './IPayment'
import { IStrategyDTO } from './IStrategyDTO'

abstract class GenericPayment implements IPayment {
    private name: IStrategyDTO
    private amount: number

    constructor(name: IStrategyDTO, amount: number) {
        this.name = name
        this.amount = amount
    }

    public getName(): string {
        return this.name
    }

    public getAmount(): number {
        return this.amount
    }

    public abstract pay(): number
}

export { GenericPayment }
