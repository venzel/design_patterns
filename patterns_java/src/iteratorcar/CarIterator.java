package iteratorcar;

public class CarIterator implements IIterator {
    private ICarRepository _carRepository;
    private int _count;
    private int _index;

    public CarIterator(ICarRepository carRepository) {
        this._carRepository = carRepository;
        this._count = this._count();
        this._index = 0;
    }

    private int _count() {
        return this._carRepository.read().size();
    }

    private ICar _getCar(int index) {
        return this._carRepository.read().get(index);
    }

    @Override
    public Object next() {
        return this._getCar(this._index++);
    }

    @Override
    public boolean hasNext() {
        return this._index >= this._count || this._getCar(this._index) == null ? false : true;
    }
}