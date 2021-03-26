package interpreterromannumber.expressions;

public class TreeDigits extends AbstractExpression {
    @Override
    public String one() {
        return "C"; // 100
    }

    @Override
    public String four() {
        return "CD"; // 400
    }

    @Override
    public String five() {
        return "D"; // 500
    }

    @Override
    public String nine() {
        return "CM"; // 900
    }

    @Override
    public int multiply() {
        return 100;
    }
}