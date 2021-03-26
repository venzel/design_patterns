import { IEditor } from '../contracts/IEditor'
import { IFile } from '../contracts/IFile'
import { IExtensionDTO } from '../dtos/IExtensionDTO'
import { File } from './File'

class Editor implements IEditor {
    private path: string
    private extension: IExtensionDTO

    constructor(path: string) {
        this.path = path
        this.setExtension()
    }

    public setExtension(): void {
        this.extension = this.path.split('.').reverse()[0] as IExtensionDTO
    }

    public convertTo(extension: IExtensionDTO): void {
        this.path = this.path.split('.').slice(0, -1).join('').concat(`.${extension}`)
        this.extension = extension
    }

    public save(): IFile {
        return new File(this.path, this.extension)
    }

    public restore(file: IFile): void {
        this.path = file.getPath()
        this.extension = file.getExtension()
    }
}

export { Editor }
