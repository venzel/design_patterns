import { IFileMemento } from './IFileMemento'

interface IFileOriginator {
    convertFileTo(extension: string): void
    save(): IFileMemento
    restore(filememento: IFileMemento): void
}

export { IFileOriginator }
