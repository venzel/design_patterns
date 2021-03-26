import { IGamer } from './IGamer'
import { Earth } from './stages/Earth'
import { Mars } from './stages/Mars'
import { Moon } from './stages/Moon'
import { Venus } from './stages/Venus'

class StageFacade {
    execute(gamer: IGamer): void {
        const earth = new Earth()
        const moon = new Moon()
        const mars = new Mars()
        const venus = new Venus()

        earth.next(moon)
        moon.next(mars)
        mars.next(venus)

        earth.go(gamer)

        gamer.getHistory()
    }
}

export { StageFacade }
