import { ICommand } from '../ICommand'

class SumAndMultiply implements ICommand {
    private sum: ICommand
    private multiply: ICommand

    constructor(sum: ICommand, multiply: ICommand) {
        this.sum = sum
        this.multiply = multiply
    }

    public do(amount: number): number {
        return this.multiply.do(this.sum.do(amount))
    }

    public undo(amount: number): number {
        return this.sum.undo(this.multiply.undo(amount))
    }
}

export { SumAndMultiply }
