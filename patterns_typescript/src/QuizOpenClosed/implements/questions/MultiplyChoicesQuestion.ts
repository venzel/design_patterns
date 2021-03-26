import { Question } from '../Question'

class MultiplyChoicesQuestion extends Question {
    private choices: string[]

    constructor(title: string, choices: string[]) {
        super(title)
        this.choices = choices
    }

    public getChoices(): string {
        const totalChoices = this.choices.length
        let i = totalChoices
        let output = ''
        while (i--) output += `[ ] ${this.choices[totalChoices - i - 1]}\n`
        return output
    }
}

export { MultiplyChoicesQuestion }
