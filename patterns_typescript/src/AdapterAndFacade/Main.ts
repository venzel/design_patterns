import { OrderFacade } from './entities/implementations/OrderFacade'

class Main {
    public static run(): void {
        const orderFacade = new OrderFacade()

        orderFacade.mount()

        const order = orderFacade.order()

        order.print()
    }
}

Main.run()
