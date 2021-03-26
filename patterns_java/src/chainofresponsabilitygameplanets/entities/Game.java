package chainofresponsability.entities;

public class Game implements IGame {
    private IPlayer _player;
    private IChest _chest;
    private IConquest _conquest;

    public Game(IPlayer player, IChest chest, IConquest conquest) {
        this._player = player;
        this._chest = chest;
        this._conquest = conquest;
    }

    public IConquest getConquest() {
        return _conquest;
    }

    @Override
    public IPlayer getPlayer() {
        return this._player;
    }

    @Override
    public void setPlayer(IPlayer player) {
        this._player = player;
    }

    @Override
    public IChest getChest() {
        return this._chest;
    }

    @Override
    public void setChest(IChest chest) {
        this._chest = chest;
    }
}