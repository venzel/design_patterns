import { IProductComponent } from './IProductComponent'

interface IProductActions {
    add(...products: IProductComponent[]): void
    remove(product: IProductComponent): void
}

export { IProductActions }
