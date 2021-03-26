import { IFile } from '../contracts/IFile'
import { IExtensionDTO } from '../dtos/IExtensionDTO'

class File implements IFile {
    private path: string
    private extension: IExtensionDTO

    constructor(path: string, extension: IExtensionDTO) {
        this.path = path
        this.extension = extension
    }

    public getPath(): string {
        return this.path
    }

    public getExtension(): IExtensionDTO {
        return this.extension
    }
}

export { File }
