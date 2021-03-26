import { ICommand } from '../ICommand'

class Up implements ICommand {
    public readonly action: string = 'up'

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

export { Up }
