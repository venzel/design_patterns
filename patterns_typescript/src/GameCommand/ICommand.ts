interface ICommand {
    do(): string
    undo(): string
    getAction(): string
}

export { ICommand }
