import { ICommand } from '../ICommand'

class Right implements ICommand {
    public readonly action: string = 'right'

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

export { Right }
