package iteratorcar;

public class Car implements ICar {
    private String _name;

    public Car(String name) {
        this._name = name;
    }

    @Override
    public String getName() {
        return this._name;
    }

    @Override
    public void setName(String name) {
        this._name = name;
    }
}