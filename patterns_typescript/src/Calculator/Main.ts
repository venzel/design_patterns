import { Calculator } from './Calculator'
import { Null } from './operations/Null'
import { Sum } from './operations/Sum'
import { Multiply } from './operations/Multiply'
import { SumAndMultiply } from './operations/SumAndMultiply'

class Main {
    public static run() {
        const calculator = new Calculator()
        // calculator.do(new Sum(4))
        calculator.do(new SumAndMultiply(new Sum(2), new Multiply(2)))
        calculator.undo()

        console.log(calculator)
    }
}

Main.run()
