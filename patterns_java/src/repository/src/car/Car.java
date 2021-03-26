package car;

public class Car implements ICar {
    private String _name;

    public Car(String _name) {
        this._name = _name;
    }

    public String getName() {
        return this._name;
    }
}