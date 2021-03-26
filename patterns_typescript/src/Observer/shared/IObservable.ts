import { IObserver } from './IObserver'

interface IObservable {
    subscribe(observer: IObserver): void
    unsubscribe(observer: IObserver): void
    notifyAll(action: string): void
}

export { IObservable }
