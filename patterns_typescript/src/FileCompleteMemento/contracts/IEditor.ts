import { IFile } from './IFile'

interface IEditor {
    setExtension(): void
    convertTo(extension: string): void
    save(): IFile
    restore(file: IFile): void
}

export { IEditor }
