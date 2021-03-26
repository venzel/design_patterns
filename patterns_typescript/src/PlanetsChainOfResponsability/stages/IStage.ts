import { IGamer } from '../IGamer'

interface IStage {
    go(gamer: IGamer): void
    next(stage: IStage): void
}

export { IStage }
