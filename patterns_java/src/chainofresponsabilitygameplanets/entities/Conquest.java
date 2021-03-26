package chainofresponsability.entities;

import java.util.ArrayList;
import java.util.List;

public class Conquest implements IConquest {
    private List<IPlanet> _stages;

    public Conquest() {
        this._stages = new ArrayList<>();
    }

    public void add(IPlanet stage) {
        this._stages.add(stage);
    }

    public List<IPlanet> list() {
        return this._stages;
    }
}