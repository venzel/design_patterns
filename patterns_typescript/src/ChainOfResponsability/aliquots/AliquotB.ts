import { IEmployee } from '../IEmployee'
import { IAliquot } from './IAliquot'

class AliquotB implements IAliquot {
    private next: IAliquot

    public calculate(employee: IEmployee): number {
        const salary = employee.getSalary()

        if (salary > 3000 && salary <= 4000) return salary * 0.2

        return this.next.calculate(employee)
    }

    public setNext(next: IAliquot): void {
        this.next = next
    }
}

export { AliquotB }
