package interpreterromannumber.expressions;

public class OneDigits extends AbstractExpression {
    @Override
    public String one() {
        return "I"; // 1
    }

    @Override
    public String four() {
        return "IV"; // 4
    }

    @Override
    public String five() {
        return "V"; // 5
    }

    @Override
    public String nine() {
        return "IX"; // 9
    }

    @Override
    public int multiply() {
        return 1;
    }
}