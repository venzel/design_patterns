package interpretersimpleexpression;

public class Main {
    public static void main(String[] args) {
        Evaluator evaluator = new Evaluator();

        String expression = "2 50 50 30 + / *";

        AbstractExpression parseExpression = evaluator.parse(expression);

        double result = parseExpression.interpret();

        System.out.println(result);
    }
}