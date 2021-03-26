import { IGamer } from '../IGamer'
import { IStage } from './IStage'

class Venus implements IStage {
    go(gamer: IGamer): void {
        const stars = Math.ceil(Math.random() * 100)
        gamer.setStars(stars)
        gamer.addToHistory('Venus', stars)
    }

    next(stage: IStage): void {}
}

export { Venus }
