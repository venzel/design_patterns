import { IProductComponent } from './IProductComponent'

interface IProductActions {
    add(...products: IProductComponent[]): void
    remove(product: IProductComponent): void
    resume(): void
}

export { IProductActions }
