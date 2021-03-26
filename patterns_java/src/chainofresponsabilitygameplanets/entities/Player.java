package chainofresponsability.entities;

public class Player implements IPlayer {
    private String _name;

    public Player(String name) {
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