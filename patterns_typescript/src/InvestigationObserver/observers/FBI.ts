import { IObserver } from '../shared/IObserver'
import { IAction } from '../shared/IAction'

class FBI implements IObserver, IAction {
    private name: string = 'FBI'

    public move(action: string): void {
        console.log(`${this.name} move ${action}`)
    }

    public update(action: string): void {
        this.move(action)
    }
}

export { FBI }
