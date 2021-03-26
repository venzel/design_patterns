import { IProduct } from './IProduct'

interface IVisitor {
    visit(product: IProduct): Object
}

export { IVisitor }
