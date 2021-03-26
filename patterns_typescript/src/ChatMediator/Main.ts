import { ChatMediator } from './ChatMediator'
import { Gamer } from './Gamer'

class Main {
    public static run(): void {
        const chat = new ChatMediator()

        const deko = new Gamer('Deko', chat)
        const duck = new Gamer('Duck', chat)
        const jene = new Gamer('Jene', chat)
        const goku = new Gamer('Goku', chat)

        chat.subscribeUser(deko)
        chat.subscribeUser(duck)
        chat.subscribeUser(jene)
        chat.subscribeUser(goku)

        deko.sendMessage('Buenas tarde!')
    }
}

Main.run()
