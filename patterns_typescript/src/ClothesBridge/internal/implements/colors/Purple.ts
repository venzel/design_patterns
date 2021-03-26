import { IColor } from '../../contracts/IColor'

class Purple implements IColor {
    public makeColor(): void {
        console.log(`Purple!`)
    }
}

export { Purple }
