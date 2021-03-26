interface ICommand {
    do(amount: number): number
    undo(amount: number): number
}

export { ICommand }
