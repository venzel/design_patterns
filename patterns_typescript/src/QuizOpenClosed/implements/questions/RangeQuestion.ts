import { Question } from '../Question'

class RangeQuestion extends Question {
    private range: number

    constructor(title: string, range: number) {
        super(title)
        this.range = range
    }

    public getChoices(): string {
        const totalRange = this.range
        let i = totalRange
        let output = ''
        while (i--) output += `() ${totalRange - i - 1}  `
        output = output.trimRight() + '\n'
        return output
    }
}

export { RangeQuestion }
