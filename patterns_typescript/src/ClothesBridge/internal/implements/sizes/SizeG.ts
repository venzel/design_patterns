import { ISize } from '../../contracts/ISize'

class SizeG implements ISize {
    public makeSize(): void {
        console.log(`SizeG!`)
    }
}

export { SizeG }
