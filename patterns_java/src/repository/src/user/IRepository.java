package user;

import java.util.List;

public interface IRepository<T> {
    void add(T object);

    List<T> list();
}