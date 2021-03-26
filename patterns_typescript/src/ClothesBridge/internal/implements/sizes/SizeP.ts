import { ISize } from '../../contracts/ISize'

class SizeP implements ISize {
    public makeSize(): void {
        console.log(`SizeP!`)
    }
}

export { SizeP }
