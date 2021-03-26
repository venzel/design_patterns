import { Clothe } from './Clothe'

class Jacket extends Clothe {
    public makeSize(): void {
        this.size.makeSize()
    }

    public makeColor(): void {
        this.color.makeColor()
    }
}

export { Jacket }
