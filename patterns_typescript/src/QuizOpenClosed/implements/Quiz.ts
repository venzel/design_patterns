import { IQuestion } from '../contracts/IQuestion'
import { IQuiz } from '../contracts/IQuiz'

class Quiz implements IQuiz {
    private title: string
    private questions: IQuestion[]

    constructor(title: string) {
        this.title = title
        this.questions = []
    }

    public subscribeQuestion(question: IQuestion): void {
        this.questions.push(question)
    }

    public getTitle(): string {
        return this.title
    }

    public print(): void {
        console.log(`${this.getTitle()}\n`)
        this.questions.forEach((question) => {
            console.log(question.getTitle())
            console.log(question.getChoices())
        })
    }
}

export { Quiz }
