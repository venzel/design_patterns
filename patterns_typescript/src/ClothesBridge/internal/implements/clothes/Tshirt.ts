import { Clothe } from './Clothe'

class Tshirt extends Clothe {
    public makeSize(): void {
        this.size.makeSize()
    }

    public makeColor(): void {
        this.color.makeColor()
    }
}

export { Tshirt }
