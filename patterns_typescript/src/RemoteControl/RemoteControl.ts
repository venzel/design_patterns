import { IDevice } from './devices/IDevice'

abstract class RemoteControl {
    protected device: IDevice

    constructor(device: IDevice) {
        this.device = device
    }

    public togglePower(): void {
        this.device.setPower(!this.device.getPower())
        console.log(this.device.getName())
    }
}

export { RemoteControl }
