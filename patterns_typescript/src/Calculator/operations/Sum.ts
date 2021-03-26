import { ICommand } from '../ICommand'

class Sum implements ICommand {
    private value: number

    constructor(value: number) {
        this.value = value
    }

    public do(amount: number): number {
        return amount + this.value
    }

    public undo(amount: number): number {
        return amount - this.value
    }
}

export { Sum }
