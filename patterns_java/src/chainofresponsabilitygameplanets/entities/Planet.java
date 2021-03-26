package chainofresponsability.entities;

import chainofresponsability.stages.IStage;

public abstract class Planet implements IPlanet, IStage {
    protected String _name;
    protected int _bronze;
    protected int _silver;
    protected int _gold;

    public Planet(String name, int bronze, int silver, int gold) {
        this._bronze = bronze;
        this._silver = silver;
        this._gold = gold;
        this._name = name;
    }

    public String getName() {
        return this._name;
    }

    public void setName(String name) {
        this._name = name;
    }

    public int getBronze() {
        return this._bronze;
    }

    public void setBronze(int bronze) {
        this._bronze = bronze;
    }

    public int getSilver() {
        return this._silver;
    }

    public void setSilver(int silver) {
        this._silver = silver;
    }

    public int getGold() {
        return this._gold;
    }

    public void setGold(int gold) {
        this._gold = gold;
    }
}