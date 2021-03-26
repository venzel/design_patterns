import { CalculateAliquot } from './CalculateAliquot'
import { Employee } from './Employee'

class Main {
    public static run(): void {
        const employee = new Employee('Tiago', 2001)

        const aliquot = new CalculateAliquot()

        console.log(aliquot.calculate(employee).toFixed(2))
    }
}

Main.run()
