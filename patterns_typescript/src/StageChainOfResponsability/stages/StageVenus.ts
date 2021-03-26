import { IGamer } from '../IGamer'
import { IStage } from './IStage'

class StageVenus implements IStage {
    private stage: IStage

    public go(gamer: IGamer): void {
        const stars = Math.floor(Math.random() * 100)
        gamer.addStars(stars)
        gamer.setHistory('Venus', stars)
    }

    public next(stage: IStage): void {}
}

export { StageVenus }
