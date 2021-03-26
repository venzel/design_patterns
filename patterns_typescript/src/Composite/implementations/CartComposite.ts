import { IProductComponent } from '../models/IProductComponent'
import { IProductActions } from '../models/IProductActions'

class CartComposite implements IProductComponent, IProductActions {
    private products: IProductComponent[] = []

    constructor(...products: IProductComponent[]) {
        this.add(...products)
    }

    public add(...products: IProductComponent[]): void {
        products.forEach((product) => {
            const productIndex = this.products.indexOf(product)
            if (productIndex === -1) this.products.push(product)
        })
    }

    public remove(product: IProductComponent): void {
        const productIndex = this.products.indexOf(product)
        if (productIndex !== -1) this.products.push(product)
    }

    public getProducts(): string {
        const products: string[] = []
        this.products.forEach((product) => products.push(product.getProducts()))
        return products.join(', ')
    }

    public getAmount(): number {
        return this.products.reduce((total, next) => total + next.getAmount(), 0)
    }

    public resume(): void {
        console.log(`-------------------------------------`)
        console.log(`Products: ${this.getProducts()}`)
        console.log(`Amount: R$ ${this.getAmount().toFixed(2)}`)
    }
}

export { CartComposite }
