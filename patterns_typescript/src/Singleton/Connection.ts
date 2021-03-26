class Connection {
    private static instance: Connection | null = null
    public random: number = Math.ceil(Math.random() * 1000)

    private constructor() {}

    public static getConection(): Connection {
        return !this.instance ? new Connection() : this.instance
    }
}

export { Connection }
