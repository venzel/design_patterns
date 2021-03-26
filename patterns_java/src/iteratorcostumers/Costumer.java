package iteratorcostumers;

public class Costumer implements ICostumer {
    private String _name;
    private int _age;

    public Costumer(String name, int age) {
        this._name = name;
        this._age = age;
    }

    public void setName(String name) {
        this._name = name;
    }

    public void setAge(int age) {
        this._age = age;
    }

    @Override
    public String getName() {
        return this._name;
    }

    @Override
    public int getAge() {
        return this._age;
    }
}