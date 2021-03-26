import { ICompanyStrategy } from '../../contracts/ICompanyStrategy'

class JadlogStrategy implements ICompanyStrategy {
    public readonly fixed: number = 40

    public calculate(amount: number): number {
        return amount * (this.fixed / 100) + amount
    }
}

export { JadlogStrategy }
