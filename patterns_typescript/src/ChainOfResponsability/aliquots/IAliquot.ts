import { IEmployee } from '../IEmployee'

interface IAliquot {
    calculate(employee: IEmployee): number
    setNext(next: IAliquot): void
}

export { IAliquot }
