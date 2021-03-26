import { IVisitor } from './IVisitor'

interface IProduct {
    getTitle(): string
    getPrice(): number
    accept(visitor: IVisitor): Object
}

export { IProduct }
