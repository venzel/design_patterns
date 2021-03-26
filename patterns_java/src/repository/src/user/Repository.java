package user;

import java.util.ArrayList;
import java.util.List;

public class Repository<T> implements IRepository<T> {
    private List<T> _objects;

    public Repository() {
        this._objects = new ArrayList<>();
    }

    @Override
    public void add(T object) {
        this._objects.add(object);
    }

    @Override
    public List<T> list() {
        return this._objects;
    }
}