import { IOrder } from './IOrder'

interface IOrderFacade {
    mount(): void
    order(): IOrder
}

export { IOrderFacade }
