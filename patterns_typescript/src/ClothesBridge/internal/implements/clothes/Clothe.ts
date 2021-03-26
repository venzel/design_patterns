import { ISize } from '../../contracts/ISize'
import { IColor } from '../../contracts/IColor'

abstract class Clothe {
    protected size: ISize
    protected color: IColor

    constructor(size: ISize, color: IColor) {
        this.size = size
        this.color = color
    }

    public abstract makeSize(): void

    public abstract makeColor(): void
}

export { Clothe }
