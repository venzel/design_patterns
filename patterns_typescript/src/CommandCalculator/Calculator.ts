import { ICommand } from './ICommand'
import { Null } from './Operations/Null'

class Calculator {
    private amount: number
    private history: ICommand[]

    constructor() {
        this.history = []
        this.init()
    }

    public init(): void {
        const command = new Null()
        this.amount = command.do(0)
        this.history.push(command)
    }

    public go(command: ICommand): void {
        this.amount = command.do(this.amount)
        this.history.push(command)
    }

    public back(): void {
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
