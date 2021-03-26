package user;

public class User implements IUser {
    private String _name;

    public User(String name) {
        this._name = name;
    }

    @Override
    public String getName() {
        return this._name;
    }
}