import { IQuestion } from './IQuestion'

interface IQuiz {
    getTitle(): string
    subscribeQuestion(question: IQuestion): void
    print(): void
}

export { IQuiz }
