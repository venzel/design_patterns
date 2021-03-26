import { ISize } from '../../contracts/ISize'

class SizeM implements ISize {
    public makeSize(): void {
        console.log(`SizeM!`)
    }
}

export { SizeM }
