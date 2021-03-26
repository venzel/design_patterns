import { IColor } from '../../contracts/IColor'

class Yellow implements IColor {
    public makeColor(): void {
        console.log(`Yellow!`)
    }
}

export { Yellow }
