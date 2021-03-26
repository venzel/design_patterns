import { BackupManager } from './implements/BackupManager'
import { FileOriginator } from './implements/FileOriginator'

class Main {
    public static run(): void {
        const fileOriginator = new FileOriginator('/home/venzel.png')
        const backupManager = new BackupManager(fileOriginator)

        fileOriginator.convertFileTo('gif')
        backupManager.backup()

        fileOriginator.convertFileTo('jpg')
        backupManager.backup()

        backupManager.show()
    }
}

Main.run()
