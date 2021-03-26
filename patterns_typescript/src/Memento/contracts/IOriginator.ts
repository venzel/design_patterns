import { IMemento } from './IMemento'

interface IOriginator {
    setState(state: string): void
    save(): Readonly<IMemento>
    restore(memento: IMemento): void
}

export { IOriginator }
