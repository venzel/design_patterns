import { User } from './User'
import { IChatMediator } from './IChatMediator'

class Gamer extends User {
    constructor(name: string, mediator: IChatMediator) {
        super(name, mediator)
    }

    public sendMessage(message: string): void {
        console.log(`${this.name}: send message: ${message}`)
        this.mediator.sendMessage(message, this)
    }

    public reciveMessage(message: string): void {
        console.log(`${this.name}: recive message: ${message}`)
    }
}

export { Gamer }
