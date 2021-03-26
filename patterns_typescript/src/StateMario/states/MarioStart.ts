import { IStateMario } from '../IStateMario'
import { MarioSuper } from './MarioSuper'
import { MarioFlower } from './MarioFlower'
import { MarioCollid } from './MarioCollid'

class MarioStar implements IStateMario {
    getMushroom(): IStateMario {
        return new MarioSuper()
    }

    getStar(): IStateMario {
        return this
    }

    getFlower(): IStateMario {
        return new MarioFlower()
    }

    collid(): IStateMario {
        return new MarioCollid()
    }

    state(): void {
        console.log(`Invencible Mario`)
    }
}

export { MarioStar }
