package costumer;

public class Costumer implements ICostumer {
    private String _name;

    public Costumer(String name) {
        this._name = name;
    }

    public String getName() {
        return this._name;
    }

    public void setName(String name) {
        this._name = name;
    }
}