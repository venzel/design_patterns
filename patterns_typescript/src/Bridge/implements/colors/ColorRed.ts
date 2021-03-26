import { IColor } from '../../contracts/IColor'

class ColorRed implements IColor {
    public applyColor(): void {
        console.log(`Red!`)
    }
}

export { ColorRed }
