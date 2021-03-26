package chainofresponsability.stages;

import chainofresponsability.entities.IGame;
import chainofresponsability.entities.Planet;
import chainofresponsability.stages.actions.Shuffle;

public class Venus extends Planet {
    public Venus() {
        super("Venus", 0, 0, 0);
    }

    @Override
    public void next(IStage stageNext) {
    }

    @Override
    public void go(IGame gameContext) {
        new Shuffle(gameContext, this);
    }
}