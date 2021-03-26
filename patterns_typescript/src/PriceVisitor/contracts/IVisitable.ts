import { IVisitor } from './IVisitor'

interface IVisitable {
    accept(visit: IVisitor): Object
}

export { IVisitable }
