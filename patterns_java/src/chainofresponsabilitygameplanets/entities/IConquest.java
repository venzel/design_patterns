package chainofresponsability.entities;

import java.util.List;

public interface IConquest {
    void add(IPlanet planet);

    List<IPlanet> list();
}