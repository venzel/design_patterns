import { IObserver } from "../shared/IObserver";

class FBI implements IObserver {
    private name: string = 'FBI'

    public update(action: string): void {
        console.log(`${this.name} following, move [${action}]`)
    }
}

export { FBI }