package chainofresponsability.entities;

public interface IGame {
    IPlayer getPlayer();

    void setPlayer(IPlayer player);

    IChest getChest();

    void setChest(IChest conquest);

    IConquest getConquest();
}