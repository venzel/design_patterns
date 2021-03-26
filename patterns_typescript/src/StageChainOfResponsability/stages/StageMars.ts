import { IGamer } from '../IGamer'
import { IStage } from './IStage'

class StageMars implements IStage {
    private stage: IStage

    public go(gamer: IGamer): void {
        const stars = Math.floor(Math.random() * 100)
        gamer.addStars(stars)
        gamer.setHistory('Mars', stars)
        this.stage.go(gamer)
    }

    public next(stage: IStage): void {
        this.stage = stage
    }
}

export { StageMars }
