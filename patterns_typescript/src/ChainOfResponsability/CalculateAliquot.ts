import { AliquotA } from './aliquots/AliquotA'
import { AliquotB } from './aliquots/AliquotB'
import { AliquotC } from './aliquots/AliquotC'
import { AliquotExempt } from './aliquots/AliquotExempt'
import { IEmployee } from './IEmployee'

class CalculateAliquot {
    public calculate(employee: IEmployee): number {
        const aliquotC = new AliquotC()
        const aliquotB = new AliquotB()
        const aliquotA = new AliquotA()
        const aliquotExempt = new AliquotExempt()

        aliquotC.setNext(aliquotB)
        aliquotB.setNext(aliquotA)
        aliquotA.setNext(aliquotExempt)

        return aliquotC.calculate(employee)
    }
}

export { CalculateAliquot }
