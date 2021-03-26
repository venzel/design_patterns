import { IMemento } from './IMemento'

interface IImageEditor {
    convertFormatTo(format: string): void
    save(): Readonly<IMemento>
    restore(memento: IMemento): void
}

export { IImageEditor }
