import { IUser } from './IUser'

interface IMediator {
    sendMessage(message: string, user: IUser): void
    subscribe(...users: IUser[]): void
}

export { IMediator }
