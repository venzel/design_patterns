import { IEmployee } from './IEmployee'

class Employee implements IEmployee {
    private name: string
    private salary: number

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
    }

    public getName(): string {
        return this.name
    }

    public getSalary(): number {
        return this.salary
    }
}

export { Employee }
