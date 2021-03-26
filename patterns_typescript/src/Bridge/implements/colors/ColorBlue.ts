import { IColor } from '../../contracts/IColor'

class ColorBlue implements IColor {
    public applyColor(): void {
        console.log(`Blue!`)
    }
}

export { ColorBlue }
