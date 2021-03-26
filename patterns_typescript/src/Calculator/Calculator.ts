import { ICommand } from './ICommand'

class Calculator {
    private amount: number
    private history: ICommand[]

    constructor() {
        this.init()
    }

    private init(): void {
        this.amount = 0
        this.history = []
    }

    public do(command: ICommand): void {
        this.amount = command.do(this.amount)
        this.history.push(command)
    }

    public undo(): void {
        const command = this.history.pop()
        if (command) this.amount = command.undo(this.amount)
    }
}

export { Calculator }
