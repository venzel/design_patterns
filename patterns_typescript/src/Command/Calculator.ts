import { ICalculator } from './ICalculator'
import { ICommand } from '../CommandCalculator/ICommand'
import { Null } from './operations/Null'

class Calculator implements ICalculator {
    private amount: number
    private history: ICommand[]

    constructor() {
        this.history = []
        this.init()
    }

    private init(): void {
        const operation = new Null()
        this.amount = operation.do(this.amount)
        this.history.push(operation)
    }

    public do(command: ICommand): void {
        this.amount = command.do(this.amount)
        this.history.push(command)
    }

    public undo(): void {
        const command = this.history.pop()
        if (command) this.amount = command.undo(this.amount)
    }

    public getAmount(): number {
        return this.amount
    }

    public getHistory(): ICommand[] {
        return this.history
    }
}

export { Calculator }
