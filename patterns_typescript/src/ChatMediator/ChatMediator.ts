import { IChatMediator } from './IChatMediator'
import { IUser } from './IUser'

class ChatMediator implements IChatMediator {
    private users: IUser[]

    constructor() {
        this.users = []
    }

    public sendMessage(message: string, user: IUser): void {
        const usersFiltered = this.users.filter((dataUser) => dataUser !== user)
        usersFiltered.forEach((user) => user.reciveMessage(message))
    }

    public subscribeUser(user: IUser): void {
        this.users.push(user)
    }
}

export { ChatMediator }
