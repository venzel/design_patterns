import { IObservable } from './IObservable'
import { IObserver } from '../shared/IObserver'

abstract class Observable implements IObservable {
    private observers: IObserver[] = []

    public subscribe(...observers: IObserver[]): void {
        observers.forEach((observer) => {
            const index = this.observers.indexOf(observer)
            if (index === -1) this.observers.push(observer)
        })
    }

    public unsubscribe(observer: IObserver): void {
        const index = this.observers.indexOf(observer)
        if (index !== -1) this.observers.splice(index, 1)
    }

    public notifyAll(action: string): void {
        this.observers.forEach((observer) => observer.update(action))
    }
}

export { Observable }
