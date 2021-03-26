package interpretersimpleexpression;

public class Mul extends AbstractExpression {
    private AbstractExpression _prev = null;
    private AbstractExpression _next = null;

    public Mul(AbstractExpression prev, AbstractExpression next) {
        this._prev = prev;
        this._next = next;
    }

    @Override
    public double interpret() {
        return this._prev.interpret() * this._next.interpret();
    }
}