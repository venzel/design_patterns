package iteratorcostumers;

import java.util.List;

public interface ICostumerRepository {
    List<ICostumer> read();

    void add(ICostumer costumer);
}
