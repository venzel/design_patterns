package iteratorcar;

import java.util.List;

public interface ICarRepository {
    List<ICar> read();

    void add(ICar car);
}