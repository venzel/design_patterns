package interpreterromannumber;

public class Main {
    public static void main(String[] args) {
        String numberRoman = "XVII";

        InterpreterFacade interpreter = new InterpreterFacade();

        interpreter.execute(numberRoman);
    }
}
