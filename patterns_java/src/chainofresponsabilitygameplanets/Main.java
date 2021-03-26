package chainofresponsability;

public class Main {
    public static void main(String[] args) {
        IGameFacade gameFacade = new GameFacade();

        String namePlayer = "Tiago";

        gameFacade.create(namePlayer);
    }
}