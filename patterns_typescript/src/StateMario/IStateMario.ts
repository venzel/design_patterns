interface IStateMario {
    getMushroom(): IStateMario
    getStar(): IStateMario
    getFlower(): IStateMario
    collid(): IStateMario
    state(): void
}

export { IStateMario }
