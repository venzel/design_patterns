import { IQuestion } from '../contracts/IQuestion'

abstract class Question implements IQuestion {
    private title: string

    constructor(title: string) {
        this.title = title
    }

    public getTitle(): string {
        return this.title
    }

    public abstract getChoices(): string
}

export { Question }
