import { IGamer } from '../IGamer'
import { IStage } from './IStage'

class Mars implements IStage {
    private stage: IStage

    go(gamer: IGamer): void {
        const stars = Math.ceil(Math.random() * 100)
        gamer.setStars(stars)
        gamer.addToHistory('Mars', stars)
        this.stage.go(gamer)
    }

    next(stage: IStage): void {
        this.stage = stage
    }
}

export { Mars }
