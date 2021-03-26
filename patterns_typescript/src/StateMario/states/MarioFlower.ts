import { IStateMario } from '../IStateMario'
import { MarioSuper } from './MarioSuper'
import { MarioStar } from './MarioStart'
import { MarioCollid } from './MarioCollid'

class MarioFlower implements IStateMario {
    getMushroom(): IStateMario {
        return new MarioSuper()
    }

    getStar(): IStateMario {
        return new MarioStar()
    }

    getFlower(): IStateMario {
        return this
    }

    collid(): IStateMario {
        return new MarioCollid()
    }

    state(): void {
        console.log(`Flower Mario`)
    }
}

export { MarioFlower }
