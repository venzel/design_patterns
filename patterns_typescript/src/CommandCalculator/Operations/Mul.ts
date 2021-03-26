import { ICommand } from '../ICommand'

class Mul implements ICommand {
    private value: number

    constructor(value?: number) {
        this.value = value || 1
    }

    public do(amount: number): number {
        return amount * this.value
    }

    public undo(amount: number): number {
        return amount / this.value
    }
}

export { Mul }
