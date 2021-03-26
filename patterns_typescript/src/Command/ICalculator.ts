import { ICommand } from './ICommand'

interface ICalculator {
    do(command: ICommand): void
    undo(): void
    getAmount(): number
    getHistory(): ICommand[]
}

export { ICalculator }
