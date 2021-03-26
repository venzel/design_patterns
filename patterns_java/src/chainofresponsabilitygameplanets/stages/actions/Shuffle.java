package chainofresponsability.stages.actions;

import java.util.Random;

import chainofresponsability.entities.IGame;
import chainofresponsability.entities.IPlanet;

public class Shuffle implements IShuffle {
    private IGame _gameContext;
    private IPlanet _planetContext;

    public Shuffle(IGame gameContext, IPlanet planetContext) {
        this._gameContext = gameContext;
        this._planetContext = planetContext;
        this.execute();
    }

    @Override
    public void execute() {
        Random random = new Random();

        int min = 5, max = 30;

        int bronze = random.nextInt((max - min) + 1) + min;
        int silver = random.nextInt((max - min) + 1) + min;
        int gold = random.nextInt((max - min) + 1) + min;

        this._planetContext.setBronze(bronze);
        this._planetContext.setSilver(silver);
        this._planetContext.setGold(gold);

        this._gameContext.getChest().setBronze(bronze);
        this._gameContext.getChest().setSilver(silver);
        this._gameContext.getChest().setGold(gold);

        this._gameContext.getConquest().add(_planetContext);
    }
}