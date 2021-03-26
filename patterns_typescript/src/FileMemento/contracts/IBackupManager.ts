interface IBackupManager {
    backup(): void
    undo(): void
    show(): void
}

export { IBackupManager }
