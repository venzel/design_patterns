import { ICostumer } from '../models/ICostumer'

class Costumer implements ICostumer {
    public name: string

    constructor(name: string) {
        this.name = name
    }
}

export { Costumer }
