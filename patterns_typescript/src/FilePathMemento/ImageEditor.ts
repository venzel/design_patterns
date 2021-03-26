import { IImageEditor } from './IImageEditor'
import { IMemento } from './IMemento'
import { Memento } from './Memento'

class ImageEditor implements IImageEditor {
    private filePath: string
    private fileFormat: string

    constructor(filePath: string, fileFormat: string) {
        this.filePath = filePath
        this.fileFormat = fileFormat
    }

    convertFormatTo(format: string): void {
        this.filePath = this.filePath.split('.').slice(0, -1).join('').concat(`.${format}`)
        this.fileFormat = format
    }

    save(): Readonly<IMemento> {
        const date = new Date()
        return new Memento(date.toISOString(), date, this.fileFormat, this.filePath)
    }

    restore(memento: IMemento): void {
        const concretMemento = memento as Memento
        this.filePath = concretMemento.getFilePath()
        this.fileFormat = concretMemento.getFileFormat()
    }
}

export { ImageEditor }
