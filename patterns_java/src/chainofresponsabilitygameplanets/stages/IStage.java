package chainofresponsability.stages;

import chainofresponsability.entities.IGame;

public interface IStage {
    void next(IStage stageNext);

    void go(IGame gameContext);
}