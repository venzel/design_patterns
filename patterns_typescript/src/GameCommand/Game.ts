import { Null } from './commands/Null'
import { ICommand } from './ICommand'

class Game {
    private count: number
    private command: string
    private history: ICommand[]

    constructor() {
        this.init()
    }

    public init(): void {
        this.count = 0
        this.history = []
        const command = new Null()
        this.command = command.do()
        this.history.push(command)
        this.count++
    }

    public do(command: ICommand): void {
        this.command = command.getAction()
        this.history.push(command)
        this.count++
    }

    public undo(): void {
        this.history.pop()
        this.count--
        this.command = this.history[this.count - 1].getAction()
    }

    public getHistory(): ICommand[] {
        return this.history
    }

    public getCommand(): string {
        return this.command
    }

    public process(): void {
        const state: any = {
            null: () => 'null',
            left: () => '<-',
            right: () => '->',
            down: () => 'l',
            up: () => 'p',
        }

        this.history.forEach((command) => console.log(state[command.getAction()]()))
    }
}

export { Game }
