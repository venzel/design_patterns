import { ICommand } from '../ICommand'

class Left implements ICommand {
    public readonly action: string = 'left'

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

export { Left }
