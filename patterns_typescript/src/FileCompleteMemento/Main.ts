import { Editor } from './implements/Editor'
import { Manager } from './implements/Manager'

class Main {
    public static run(): void {
        const editor = new Editor('/home/venzel.jpg')
        const manager = new Manager(editor)

        editor.convertTo('gif')
        editor.convertTo('png')
        editor.convertTo('jpeg')
        manager.saveBackup()

        editor.convertTo('png')
        editor.convertTo('gif')
        manager.saveBackup()

        manager.showBackups()
    }
}

Main.run()
