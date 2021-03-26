import { ProxyMessage } from './ProxyMessage'
import { Message } from './Message'

class Main {
    public static run() {
        const message = new ProxyMessage(new Message('oi Solange!'))
        console.log(message.send())
    }
}

Main.run()
