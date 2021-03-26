import { IUser } from './IUser'
import { IMediator } from './IMediator'

abstract class User implements IUser {
    protected name: string
    protected mediator: IMediator

    constructor(name: string, mediator: IMediator) {
        this.name = name
        this.mediator = mediator
    }

    public sendMessage(message: string): void {
        console.log(`${this.name} send message: ${message}`)
        this.mediator.sendMessage(message, this)
    }

    public reciveMessage(message: string): void {
        console.log(`${this.name} recive message: ${message}`)
    }
}

export { User }
