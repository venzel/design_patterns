package chainofresponsability.stages;

import chainofresponsability.entities.IGame;
import chainofresponsability.entities.Planet;
import chainofresponsability.stages.actions.Shuffle;

public class Earth extends Planet {
    private IStage _stage;

    public Earth() {
        super("Earth", 0, 0, 0);
    }

    @Override
    public void next(IStage stageNext) {
        this._stage = stageNext;
    }

    @Override
    public void go(IGame gameContext) {
        new Shuffle(gameContext, this);

        this._stage.go(gameContext);
    }
}