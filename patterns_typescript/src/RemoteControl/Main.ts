import { RemoteControl } from './RemoteControl'
import { RemoteControlVolume } from './RemoteControlVolume'
import { Television } from './devices/Television'
import { Radio } from './devices/Radio'

class Main {
    public static run() {
        const televisionRemoteControl = new RemoteControlVolume(new Television())
        const radioRemoteControl = new RemoteControlVolume(new Radio())

        radioRemoteControl.togglePower()
    }
}

Main.run()
