package iteratorcostumers;

import java.util.List;

public class CostumerIterator implements IIterator {
    private ICostumerRepository _costumerRepository;
    private int _count;
    private int _position;

    public CostumerIterator(ICostumerRepository costumerRepository) {
        this._costumerRepository = costumerRepository;
        this._count = this.count();
        this._position = 0;
    }

    private int count() {
        return this._costumerRepository.read().size();
    }

    @Override
    public Object next() {
        ICostumer costumer = this._costumerRepository.read().get(this._position);
        _position++;
        return costumer;
    }

    @Override
    public boolean hasNext() {
        List<ICostumer> list = this._costumerRepository.read();

        return this._position >= this._count || list.get(this._position) == null ? false : true;
    }
}