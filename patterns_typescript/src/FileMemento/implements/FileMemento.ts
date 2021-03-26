import { IFileMemento } from '../contracts/IFileMemento'

class FileMemento implements IFileMemento {
    private path: string
    private extension: string

    constructor(path: string, extension: string) {
        this.path = path
        this.extension = extension
    }

    public getPath(): string {
        return this.path
    }

    public getExtension(): string {
        return this.extension
    }
}

export { FileMemento }
