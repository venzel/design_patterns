import { ILetter } from './ILetter'

class Letter implements ILetter {
    public send(): string {
        return `Hy beautiful Maria!`
    }
}

export { Letter }
