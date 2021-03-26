import { Question } from '../Question'

class TextQuestion extends Question {
    constructor(title: string) {
        super(title)
    }

    public getChoices(): string {
        return `Describe: ________________\n`
    }
}

export { TextQuestion }
