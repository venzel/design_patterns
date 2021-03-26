import { BooleanQuestion } from './implements/questions/BooleanQuestion'
import { MultiplyChoicesQuestion } from './implements/questions/MultiplyChoicesQuestion'
import { RangeQuestion } from './implements/questions/RangeQuestion'
import { TextQuestion } from './implements/questions/TextQuestion'
import { Quiz } from './implements/Quiz'

class Main {
    public static run(): void {
        const quiz = new Quiz('IFPB 2021')

        quiz.subscribeQuestion(new BooleanQuestion('Do you have kid(s)?'))
        quiz.subscribeQuestion(
            new MultiplyChoicesQuestion('You favorite hobbie?', ['Game', 'Music', 'Youtube'])
        )
        quiz.subscribeQuestion(new RangeQuestion('Insert your note:', 5))
        quiz.subscribeQuestion(new TextQuestion('What is your opinion?'))

        quiz.print()
    }
}

Main.run()
