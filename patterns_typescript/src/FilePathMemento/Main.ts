import { ImageEditor } from './ImageEditor'
import { ManagerBackup } from './ManagerBackup'

class Main {
    public static run(): void {
        const imageEditor = new ImageEditor('/media/image.png', 'png')
        const managerBackup = new ManagerBackup(imageEditor)

        managerBackup.backup()

        imageEditor.convertFormatTo('gif')
        managerBackup.backup()

        imageEditor.convertFormatTo('weg')
        managerBackup.backup()

        managerBackup.undo()

        // console.log(imageEditor)

        managerBackup.showMementos()
    }
}

Main.run()
