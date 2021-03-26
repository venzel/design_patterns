import { IMediator } from './IMediator'
import { IUser } from './IUser'

class Mediator implements IMediator {
    private users: IUser[]

    constructor() {
        this.users = []
    }

    public sendMessage(message: string, user: IUser): void {
        const usersFiltered = this.users.filter((dataUser) => dataUser !== user)
        usersFiltered.forEach((userFiltered) => userFiltered.reciveMessage(message))
    }

    public subscribe(...users: IUser[]): void {
        users.forEach((user) => this.users.push(user))
    }
}

export { Mediator }
