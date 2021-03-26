import { IUser } from './IUser'

interface IChatMediator {
    sendMessage(message: string, user: IUser): void
    subscribeUser(user: IUser): void
}

export { IChatMediator }
