import { IUser } from './IUser'
import { IChatMediator } from './IChatMediator'

abstract class User implements IUser {
    protected name: string
    protected mediator: IChatMediator

    constructor(name: string, mediator: IChatMediator) {
        this.name = name
        this.mediator = mediator
    }

    public abstract sendMessage(message: string): void
    public abstract reciveMessage(message: string): void
}

export { User }
