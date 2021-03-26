import { IExtensionDTO } from '../dtos/IExtensionDTO'

interface IFile {
    getPath(): string
    getExtension(): IExtensionDTO
}

export { IFile }
