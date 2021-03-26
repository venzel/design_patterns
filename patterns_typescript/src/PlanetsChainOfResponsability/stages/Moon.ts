import { IGamer } from '../IGamer'
import { IStage } from './IStage'

class Moon implements IStage {
    private stage: IStage

    go(gamer: IGamer): void {
        const stars = Math.ceil(Math.random() * 100)
        gamer.setStars(stars)
        gamer.addToHistory('Moon', stars)
        this.stage.go(gamer)
    }

    next(stage: IStage): void {
        this.stage = stage
    }
}

export { Moon }
