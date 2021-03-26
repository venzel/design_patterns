package interpretersimpleexpression;

public class Div extends AbstractExpression {
    private AbstractExpression _prev = null;
    private AbstractExpression _next = null;

    public Div(AbstractExpression prev, AbstractExpression next) {
        this._prev = prev;
        this._next = next;
    }

    @Override
    public double interpret() {
        return this._prev.interpret() / this._next.interpret();
    }
}