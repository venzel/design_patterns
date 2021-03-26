import { Question } from '../Question'

class BooleanQuestion extends Question {
    constructor(title: string) {
        super(title)
    }

    public getChoices(): string {
        return `() TRUE () FALSE\n`
    }
}

export { BooleanQuestion }
