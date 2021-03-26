import { RemoteControl } from './RemoteControl'
import { IDevice } from './devices/IDevice'

class RemoteControlColor extends RemoteControl {
    constructor(device: IDevice) {
        super(device)
    }

    public volumeUp(): void {
        const oldVolume = this.device.getVolume()
        this.device.setVolume(this.device.getVolume() + 10)
    }

    public volumeDown(): void {
        const oldVolume = this.device.getVolume()
        this.device.setVolume(this.device.getVolume() - 10)
    }
}

export { RemoteControlColor }
