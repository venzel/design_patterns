import { IEmployee } from '../IEmployee'
import { IAliquot } from './IAliquot'

class AliquotExempt implements IAliquot {
    private next: IAliquot

    public calculate(employee: IEmployee): number {
        return 0
    }

    public setNext(next: IAliquot): void {}
}

export { AliquotExempt }
