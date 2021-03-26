import { IColor } from '../contracts/IColor'

abstract class Vehicle {
    protected color: IColor

    constructor(color: IColor) {
        this.color = color
    }

    public abstract applyColor(): void
}

export { Vehicle }
