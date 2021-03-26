import { IFileMemento } from '../contracts/IFileMemento'
import { IFileOriginator } from '../contracts/IFileOriginator'
import { FileMemento } from './FileMemento'

class FileOriginator implements IFileOriginator {
    private path: string
    private extension: string

    constructor(path: string) {
        this.path = path
        this.setExtension()
    }

    public setExtension(): void {
        this.extension = this.path.split('.').reverse()[0]
    }

    public convertFileTo(extension: string): void {
        this.path = this.path.split('.').slice(0, -1).concat(`.${extension}`).join('')
        this.extension = extension
    }

    public save(): IFileMemento {
        return new FileMemento(this.path, this.extension)
    }

    public restore(filememento: IFileMemento): void {
        this.path = filememento.getPath()
        this.extension = filememento.getExtension()
    }
}

export { FileOriginator }
