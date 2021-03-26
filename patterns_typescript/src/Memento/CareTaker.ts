import { ICareTaker } from './contracts/ICareTaker'
import { IMemento } from './contracts/IMemento'
import { IOriginator } from './contracts/IOriginator'

class CareTaker implements ICareTaker {
    private originator: IOriginator
    private mementos: IMemento[]

    constructor(originator: IOriginator) {
        this.originator = originator
        this.mementos = []
        this.backup()
    }

    backup(): void {
        this.mementos.push(this.originator.save())
    }

    undo(): void {
        const memento = this.mementos.pop()
        if (memento) this.originator.restore(memento)
    }

    show(): void {
        console.log(this.mementos)
    }
}

export { CareTaker }
