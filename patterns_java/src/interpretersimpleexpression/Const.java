package interpretersimpleexpression;

public class Const extends AbstractExpression {
    private double _value = 0;

    public Const(double value) {
        this._value = value;
    }

    @Override
    public double interpret() {
        return this._value;
    }
}