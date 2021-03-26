import { Jacket } from './internal/implements/clothes/Jacket'
import { SizeM } from './internal/implements/sizes/SizeM'
import { Purple } from './internal/implements/colors/Purple'

class Main {
    public static run() {
        const jacket = new Jacket(new SizeM(), new Purple())

        jacket.makeColor()
        jacket.makeSize()
    }
}

Main.run()
