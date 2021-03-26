interface ICommand {
    do(command: number): number
    undo(amount: number): number
}

export { ICommand }
