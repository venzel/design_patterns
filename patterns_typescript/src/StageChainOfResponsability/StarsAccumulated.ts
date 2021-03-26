import { IGamer } from './IGamer'
import { StageEarth } from './stages/StageEarth'
import { StageMars } from './stages/StageMars'
import { StageMoon } from './stages/StageMoon'
import { StageVenus } from './stages/StageVenus'

class StarsAccumulated {
    public accumulated(gamer: IGamer): void {
        const earth = new StageEarth()
        const moon = new StageMoon()
        const mars = new StageMars()
        const venus = new StageVenus()

        earth.next(moon)
        moon.next(mars)
        mars.next(venus)

        earth.go(gamer)

        gamer.getHistory()

        console.log(gamer.getStars())
    }
}

export { StarsAccumulated }
