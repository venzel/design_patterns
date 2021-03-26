import { IBackupManager } from '../contracts/IBackupManager'
import { IFileMemento } from '../contracts/IFileMemento'
import { IFileOriginator } from '../contracts/IFileOriginator'

class BackupManager implements IBackupManager {
    private fileOriginator: IFileOriginator
    private filesMementos: IFileMemento[]

    constructor(fileOriginator: IFileOriginator) {
        this.fileOriginator = fileOriginator
        this.filesMementos = []
        this.backup()
    }

    public backup(): void {
        this.filesMementos.push(this.fileOriginator.save())
    }

    public undo(): void {
        if (this.filesMementos.length > 1) {
            const fileOriginator = this.filesMementos.pop()
            if (fileOriginator) this.fileOriginator.restore(fileOriginator)
        }
    }

    public show(): void {
        console.log(this.filesMementos)
    }
}

export { BackupManager }
