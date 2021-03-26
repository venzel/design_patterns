import { ICommand } from '../ICommand'

class Null implements ICommand {
    public readonly action: string = 'null'

    public do(): string {
        return this.action
    }

    public undo(): string {
        return this.action
    }

    public getAction(): string {
        return this.action
    }
}

export { Null }
