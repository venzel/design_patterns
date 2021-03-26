import { IMemento } from './IMemento'

class Memento implements IMemento {
    private name: string
    private date: Date
    private filePath: string
    private fileFormat: string

    constructor(name: string, date: Date, filePath: string, fileFormat: string) {
        this.name = name
        this.date = date
        this.filePath = filePath
        this.fileFormat = fileFormat
    }

    getName(): string {
        return this.name
    }

    getDate(): Date {
        return this.date
    }

    getFilePath(): string {
        return this.filePath
    }

    getFileFormat(): string {
        return this.fileFormat
    }
}

export { Memento }
