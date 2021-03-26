import { IShipping } from '../../models/IShipping'

class ApiCorreios implements IShipping {
    public calculate(amount: number): number {
        return 45
    }
}

export { ApiCorreios }
