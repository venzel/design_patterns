import { ICommand } from '../ICommand'

class Down implements ICommand {
    public readonly action: string = 'down'

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

export { Down }
