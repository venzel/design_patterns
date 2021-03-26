import { IEditor } from '../contracts/IEditor'
import { IFile } from '../contracts/IFile'
import { IManager } from '../contracts/IManager'

class Manager implements IManager {
    private editor: IEditor
    private backups: IFile[]

    constructor(editor: IEditor) {
        this.editor = editor
        this.backups = []
        this.saveBackup()
    }

    public saveBackup(): void {
        this.backups.push(this.editor.save())
    }

    public undoBackup(): void {
        if (this.backups.length > 1) {
            const file = this.backups.pop()
            if (file) this.editor.restore(file)
        }
    }

    public showBackups(): void {
        console.log(this.backups)
    }
}

export { Manager }
