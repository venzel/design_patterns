import { Vehicle } from '../Vehicle'

class Buss extends Vehicle {
    public applyColor(): void {
        this.color.applyColor()
    }
}

export { Buss }
