import { IObserver } from '../shared/IObserver'

class Detective implements IObserver {
    private name: string = 'Detective'

    public update(action: string): void {
        console.log(`${this.name} fallowing, move [${action}]`)
    }
}

export { Detective }
