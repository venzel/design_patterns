import { ILetter } from './ILetter'

class LetterProxy implements ILetter {
    private letter: ILetter

    constructor(letter: ILetter) {
        this.letter = letter
    }

    public send(): string {
        const letterIntercepted = this.letter.send()

        const parts = letterIntercepted.split(' ')
        const word = parts[1] === 'beautiful' ? '[monga]' : parts[1]
        const regEx = new RegExp(`${parts[1]}`)
        const messageFinal = letterIntercepted.replace(regEx, word)

        return messageFinal
    }
}

export { LetterProxy }
