import { ICompanyDTO } from '../dtos/ICompanyDTO'
import { ICompanyStrategy } from './ICompanyStrategy'

interface IShippingStrategy {
    setStrategy(strategy: ICompanyDTO): void
    subscribeCompany(name: ICompanyDTO, company: ICompanyStrategy): void
    calculate(amount: number): number
}

export { IShippingStrategy }
