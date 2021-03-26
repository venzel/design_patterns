import { IStateMario } from '../IStateMario'
import { MarioStar } from './MarioStart'
import { MarioFlower } from './MarioFlower'
import { MarioCollid } from './MarioCollid'

class MarioSuper implements IStateMario {
    getMushroom(): IStateMario {
        return this
    }

    getStar(): IStateMario {
        return new MarioStar()
    }

    getFlower(): IStateMario {
        return new MarioFlower()
    }

    collid(): IStateMario {
        return new MarioCollid()
    }

    state(): void {
        console.log(`Super Mario`)
    }
}

export { MarioSuper }
