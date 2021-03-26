import { IMemento } from './contracts/IMemento'
import { IOriginator } from './contracts/IOriginator'
import { Memento } from './Memento'

class Originator implements IOriginator {
    private state: string

    constructor(state: string) {
        this.state = state
    }

    setState(state: string): void {
        this.state = state
    }

    save(): Readonly<IMemento> {
        return new Memento(this.state)
    }

    restore(memento: IMemento): void {
        this.state = memento.getState()
    }
}

export { Originator }
