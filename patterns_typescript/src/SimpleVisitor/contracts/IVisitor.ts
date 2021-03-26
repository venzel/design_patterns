import { IProduct } from './IProduct'

interface IVisitor {
    visit(product: IProduct): number
}

export { IVisitor }
