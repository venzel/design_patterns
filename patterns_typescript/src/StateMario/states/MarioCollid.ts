import { IStateMario } from '../IStateMario'
import { MarioSuper } from './MarioSuper'
import { MarioStar } from './MarioStart'
import { MarioFlower } from './MarioFlower'

class MarioCollid implements IStateMario {
    getMushroom(): IStateMario {
        return new MarioSuper()
    }

    getStar(): IStateMario {
        return new MarioStar()
    }

    getFlower(): IStateMario {
        return new MarioFlower()
    }

    collid(): IStateMario {
        return this
    }

    state(): void {
        console.log(`Die Mario`)
    }
}

export { MarioCollid }
