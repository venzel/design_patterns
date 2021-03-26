import { IEmployee } from '../IEmployee'
import { IAliquot } from './IAliquot'

class AliquotC implements IAliquot {
    private next: IAliquot

    public calculate(employee: IEmployee): number {
        const salary = employee.getSalary()

        if (salary > 4000) return salary * 0.3

        return this.next.calculate(employee)
    }

    public setNext(next: IAliquot): void {
        this.next = next
    }
}

export { AliquotC }
