import { IMessage } from './IMessage'

class Message implements IMessage {
    private message: string

    constructor(message: string) {
        this.message = message
    }

    public send(): string {
        return this.message
    }
}

export { Message }
