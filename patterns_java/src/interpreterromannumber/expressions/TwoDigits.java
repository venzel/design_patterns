package interpreterromannumber.expressions;

public class TwoDigits extends AbstractExpression {
    @Override
    public String one() {
        return "X"; // 10
    }

    @Override
    public String four() {
        return "XL"; // 40
    }

    @Override
    public String five() {
        return "L"; // 50
    }

    @Override
    public String nine() {
        return "XC"; // 90
    }

    @Override
    public int multiply() {
        return 10;
    }
}