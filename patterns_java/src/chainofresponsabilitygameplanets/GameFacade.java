package chainofresponsability;

import chainofresponsability.entities.Chest;
import chainofresponsability.entities.Conquest;
import chainofresponsability.entities.Game;
import chainofresponsability.entities.IChest;
import chainofresponsability.entities.IConquest;
import chainofresponsability.entities.IGame;
import chainofresponsability.entities.IPlayer;
import chainofresponsability.entities.Player;
import chainofresponsability.stages.Earth;
import chainofresponsability.stages.IStage;
import chainofresponsability.stages.Mars;
import chainofresponsability.stages.Pluto;
import chainofresponsability.stages.Venus;

public class GameFacade implements IGameFacade {
    public void create(String namePlayer) {
        IPlayer player = new Player(namePlayer);
        IChest chest = new Chest();

        IConquest conquest = new Conquest();

        IGame gameContext = new Game(player, chest, conquest);

        IStage earth = new Earth();
        IStage mars = new Mars();
        IStage pluto = new Pluto();
        IStage venus = new Venus();

        earth.next(mars);
        mars.next(pluto);
        pluto.next(venus);

        earth.go(gameContext);

        System.out.println("Player: " + namePlayer);

        System.out.println("\nInventary:\n");

        gameContext.getConquest().list().forEach(planet -> {
            String name = planet.getName();
            String bronze = Integer.toString(planet.getBronze());
            String silver = Integer.toString(planet.getSilver());
            String gold = Integer.toString(planet.getGold());

            String result = name + " | " + bronze + " | " + silver + " | " + gold;

            System.out.println(result);
        });
    }
}