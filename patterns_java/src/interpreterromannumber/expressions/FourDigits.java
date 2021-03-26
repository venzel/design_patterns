package interpreterromannumber.expressions;

public class FourDigits extends AbstractExpression {
    @Override
    public String one() {
        return "M"; // 1000
    }

    @Override
    public String four() {
        return " ";
    }

    @Override
    public String five() {
        return " ";
    }

    @Override
    public String nine() {
        return " ";
    }

    @Override
    public int multiply() {
        return 1000;
    }
}