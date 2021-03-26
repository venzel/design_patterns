import { ICommand } from '../ICommand'

class Null implements ICommand {
    private value: number

    constructor() {
        this.value = 0
    }

    public do(amount: number): number {
        return this.value
    }

    public undo(amount: number): number {
        return this.value
    }
}

export { Null }
