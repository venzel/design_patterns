import { Connection } from './Connection'

class Main {
    public static run(): void {
        const connection = Connection.getConection()

        console.log(connection.random)
        console.log(connection.random)
        console.log(connection.random)
    }
}

Main.run()
