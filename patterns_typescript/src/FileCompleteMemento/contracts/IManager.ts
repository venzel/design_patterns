interface IManager {
    saveBackup(): void
    undoBackup(): void
    showBackups(): void
}

export { IManager }
