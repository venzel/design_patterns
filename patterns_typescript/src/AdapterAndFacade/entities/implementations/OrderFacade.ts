import { Costumer } from './Costumer'
import { Order } from './Order'
import { IOrder } from '../models/IOrder'
import { Product } from './Product'
import { IProduct } from '../models/IProduct'
import { ShippingGenericAdapter } from './ShippingGenericAdapter'
import { IShipping } from '../models/IShipping'
import { IOrderFacade } from '../models/IOrderFacade'
import { ICostumer } from '../models/ICostumer'
import { ApiFedex } from '../providers/Shipping/ApiFedex'

class OrderFacade implements IOrderFacade {
    private costumer: ICostumer
    private products: IProduct[]
    private shipping: IShipping

    public mount(): void {
        this.costumer = new Costumer('Tiago')
        this.products = [new Product('bean', 4), new Product('rice', 3), new Product('spaghetti', 3)]
        this.shipping = new ShippingGenericAdapter(new ApiFedex())
    }

    public order(): IOrder {
        return new Order(this.costumer, this.products, this.shipping)
    }
}

export { OrderFacade }
