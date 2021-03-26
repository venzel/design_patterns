package iteratorcar;

import java.util.ArrayList;
import java.util.List;

public class CarRepository implements ICarRepository {
    private List<ICar> _cars;

    public CarRepository() {
        this._cars = new ArrayList<ICar>();
    }

    @Override
    public List<ICar> read() {
        return this._cars;
    }

    @Override
    public void add(ICar car) {
        this._cars.add(car);
    }
}