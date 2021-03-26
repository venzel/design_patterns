import { IImageEditor } from './IImageEditor'
import { IMemento } from './IMemento'

class ManagerBackup {
    private readonly imageEditor: IImageEditor
    private history: IMemento[]

    constructor(imageEditor: IImageEditor) {
        this.imageEditor = imageEditor
        this.history = []
    }

    backup(): void {
        console.log(`Backup: salving state imageEditor`)
        const memento = this.imageEditor.save()
        this.history.push(memento)
    }

    undo(): void {
        const memento = this.history.pop()
        if (memento) {
            this.imageEditor.restore(memento)
            console.log(`Backup: ${memento.getName()} restored!`)
        }
    }

    showMementos(): void {
        console.log(this.history)
    }
}

export { ManagerBackup }
