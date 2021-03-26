import { Vehicle } from '../Vehicle'

class Car extends Vehicle {
    public applyColor(): void {
        this.color.applyColor()
    }
}

export { Car }
