import { Calculator } from './Calculator'
import { Sum } from './Operations/Sum'
import { Sub } from './Operations/Sub'
import { Mul } from './Operations/Mul'
import { Div } from './Operations/Div'
import { SumAndMultiply } from './Operations/SumAndMultiply'

class Main {
    public static run(): void {
        const calculator = new Calculator()

        /*
        calculator.go(new Sum(10))
        calculator.go(new Mul(2))
        calculator.go(new Div(4))
        */

        calculator.go(new SumAndMultiply(new Sum(10), new Mul(4)))

        console.log(calculator.getAmount())
        console.log(calculator.getHistory())
    }
}

Main.run()
