import { IStateMario } from '../IStateMario'
import { MarioSuper } from './MarioSuper'
import { MarioStar } from './MarioStart'
import { MarioFlower } from './MarioFlower'
import { MarioCollid } from './MarioCollid'

class Mario implements IStateMario {
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
        return new MarioCollid()
    }

    state(): void {
        console.log(`Common Mario`)
    }
}

export { Mario }
