import { ICommand } from '../ICommand'

class Multiply implements ICommand {
    private value: number

    constructor(value: number) {
        this.value = value
    }

    public do(amount: number): number {
        return amount * this.value
    }

    public undo(amount: number): number {
        return amount / this.value
    }
}

export { Multiply }
