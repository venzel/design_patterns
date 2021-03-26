import { Letter } from './Letter'
import { LetterProxy } from './LetterProxy'

class Main {
    public static run() {
        const letter = new LetterProxy(new Letter())

        console.log(letter.send())
    }
}

Main.run()
