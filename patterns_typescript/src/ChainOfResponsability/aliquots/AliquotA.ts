import { IEmployee } from '../IEmployee'
import { IAliquot } from './IAliquot'

class AliquotA implements IAliquot {
    private next: IAliquot

    public calculate(employee: IEmployee): number {
        const salary = employee.getSalary()

        if (salary > 2000 && salary <= 3000) return salary * 0.1

        return this.next.calculate(employee)
    }

    public setNext(next: IAliquot): void {
        this.next = next
    }
}

export { AliquotA }
