import { IMessage } from './IMessage'

class ProxyMessage implements IMessage {
    private message: IMessage

    constructor(message: IMessage) {
        this.message = message
    }

    public send(): string {
        const original = this.message.send()

        const authorIntercept = 'Solange'

        const regExp = new RegExp(`${authorIntercept}`, 'gi')

        return original.replace(regExp, `[${authorIntercept}]`)
    }
}

export { ProxyMessage }
