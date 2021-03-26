import { IObserver } from '../shared/IObserver'
import { IAction } from '../shared/IAction'

class Detective implements IObserver, IAction {
    private name: string = 'Detective'

    public move(action: string): void {
        console.log(`${this.name} move ${action}`)
    }

    public update(action: string): void {
        this.move(action)
    }
}

export { Detective }
