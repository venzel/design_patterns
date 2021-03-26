import { ICompanyStrategy } from '../../contracts/ICompanyStrategy'

class FedexStrategy implements ICompanyStrategy {
    public readonly fixed: number = 15

    public calculate(amount: number): number {
        return amount * (this.fixed / 100) + amount
    }
}

export { FedexStrategy }
