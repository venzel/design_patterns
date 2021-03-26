import { IMemento } from './contracts/IMemento'

class Memento implements IMemento {
    private state: string

    constructor(state: string) {
        this.state = state
    }

    getState(): string {
        return this.state
    }
}

export { Memento }
