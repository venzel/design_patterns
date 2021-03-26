import { Car } from './implements/products/Car'
import { PriceHolidayVisitor } from './implements/visitors/PriceHolidayVisitor'
import { PriceMondayVisitor } from './implements/visitors/PriceMondayVisitor'

class Main {
    public static run(): void {
        const priceMonday = new PriceMondayVisitor()
        const priceHoliday = new PriceHolidayVisitor()

        const car = new Car('Gol', 20_000)

        console.log(car.accept(priceMonday))
        console.log(car.accept(priceHoliday))
    }
}

Main.run()
