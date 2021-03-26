import { ICommand } from '../ICommand'

class Null implements ICommand {
    private readonly value: number = 0

    public do(amount: number): number {
        return this.value
    }

    public undo(amount: number): number {
        return this.value
    }
}

export { Null }
