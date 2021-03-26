import { ICommand } from '../ICommand'

class SumAndMultiply implements ICommand {
    private sum: ICommand
    private mul: ICommand

    constructor(sum: ICommand, mul: ICommand) {
        this.sum = sum
        this.mul = mul
    }

    public do(amount: number): number {
        return this.mul.do(this.sum.do(amount))
    }

    public undo(amount: number): number {
        return this.sum.undo(this.mul.undo(amount))
    }
}

export { SumAndMultiply }
