import { ColorBlue } from './implements/colors/ColorBlue'
import { Buss } from './implements/vehicles/Buss'
import { ColorRed } from './implements/colors/ColorRed'

class Main {
    public static run() {
        const buss = new Buss(new ColorRed())
        buss.applyColor()
    }
}

Main.run()
