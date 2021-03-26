import { Calculator } from './Calculator'
import { Sum } from './operations/Sum'

class Main {
    public static run() {
        const calculator = new Calculator()
        calculator.do(new Sum(10))
        calculator.do(new Sum(10))
        console.log(calculator.getAmount())
    }
}

Main.run()
