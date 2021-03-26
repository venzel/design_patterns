package chainofresponsability.entities;

public class Chest implements IChest {
    private int _bronze;
    private int _silver;
    private int _gold;

    public Chest() {
        this._bronze = 0;
        this._silver = 0;
        this._gold = 0;
    }

    public int getBronze() {
        return this._bronze;
    }

    public void setBronze(int bronze) {
        this._bronze += bronze;
    }

    public int getSilver() {
        return this._silver;
    }

    public void setSilver(int silver) {
        this._silver += silver;
    }

    public int getGold() {
        return this._gold;
    }

    public void setGold(int gold) {
        this._gold += gold;
    }
}