import { Observable } from '../shared/Observable'
import { IAction } from '../shared/IAction'

class Thief extends Observable implements IAction {
    private name: string = 'Thief'

    public move(action: string): void {
        console.log(`${this.name} move [${action}]`)
        this.notifyAll(action)
    }
}

export { Thief }
