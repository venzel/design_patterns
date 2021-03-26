import { IObserver } from './IObserver'

interface IObservable {
    subscribe(...observers: IObserver[]): void
    unsubscribe(observer: IObserver): void
    notifyAll(action: string): void
}

export { IObservable }
