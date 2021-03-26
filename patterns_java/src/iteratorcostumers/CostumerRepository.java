package iteratorcostumers;

import java.util.ArrayList;
import java.util.List;

public class CostumerRepository implements ICostumerRepository {
    private List<ICostumer> _costumers;

    public CostumerRepository() {
        this._costumers = new ArrayList<ICostumer>();
    }

    @Override
    public List<ICostumer> read() {
        return this._costumers;
    }

    @Override
    public void add(ICostumer costumer) {
        this._costumers.add(costumer);
    }
}