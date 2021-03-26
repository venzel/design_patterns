package interpretersimpleexpression;

public class Sub extends AbstractExpression {
    private AbstractExpression _prev = null;
    private AbstractExpression _next = null;

    public Sub(AbstractExpression prev, AbstractExpression next) {
        this._prev = prev;
        this._next = next;
    }

    @Override
    public double interpret() {
        return this._prev.interpret() - this._next.interpret();
    }
}