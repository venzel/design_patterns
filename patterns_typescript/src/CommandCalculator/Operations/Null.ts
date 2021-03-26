import { ICommand } from '../ICommand'

class Null implements ICommand {
    private readonly value: number = 0

    public do(value: number): number {
        return this.value
    }

    public undo(value: number): number {
        return this.value
    }
}

export { Null }
