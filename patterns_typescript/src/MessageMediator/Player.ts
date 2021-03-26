import { User } from './User'
import { IMediator } from './IMediator'

class Player extends User {
    constructor(name: string, mediator: IMediator) {
        super(name, mediator)
    }
}

export { Player }
