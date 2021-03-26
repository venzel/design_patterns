import { ICompanyStrategy } from '../contracts/ICompanyStrategy'
import { IShippingStrategy } from '../contracts/IShippingStrategy'
import { ICompanyDTO } from '../dtos/ICompanyDTO'
import { FedexStrategy } from './strategies/FedexStrategy'
import { JadlogStrategy } from './strategies/JadlogStrategy'

class ShippingStrategy implements IShippingStrategy {
    private strategy: ICompanyDTO
    private companies: Map<ICompanyDTO, ICompanyStrategy>

    constructor(strategy: ICompanyDTO) {
        this.strategy = strategy
        this.setupCompanies()
    }

    private setupCompanies(): void {
        this.companies = new Map<ICompanyDTO, ICompanyStrategy>()
        this.companies.set('fedex', new FedexStrategy())
        this.companies.set('jadlog', new JadlogStrategy())
    }

    public subscribeCompany(name: ICompanyDTO, company: ICompanyStrategy): void {
        this.companies.set(name, company)
    }

    public setStrategy(strategy: ICompanyDTO): void {
        this.strategy = strategy
    }

    public calculate(amount: number): number {
        const company = this.companies.get(this.strategy)
        if (!company) throw new Error('No strategy!')
        return company.calculate(amount)
    }
}

export { ShippingStrategy }
