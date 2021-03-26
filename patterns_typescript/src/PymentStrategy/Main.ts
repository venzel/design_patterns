import { DiscountStrategy } from './implements/DiscountStrategy'
import { CardStrategy } from './implements/strategies/CardStrategy'
import { CashStrategy } from './implements/strategies/CashStrategy'

class Main {
    public static run(): void {
        const discount = new DiscountStrategy(new CardStrategy())

        discount.setStrategy(new CashStrategy())

        discount.calculate(200)

        discount.print()
    }
}

Main.run()
