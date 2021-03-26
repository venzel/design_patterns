package interpreterromannumber;

import java.util.Stack;

import interpreterromannumber.expressions.AbstractExpression;
import interpreterromannumber.expressions.Context;
import interpreterromannumber.expressions.FourDigits;
import interpreterromannumber.expressions.OneDigits;
import interpreterromannumber.expressions.TreeDigits;
import interpreterromannumber.expressions.TwoDigits;

public class InterpreterFacade {
    Stack<AbstractExpression> _stackExpressions;

    public InterpreterFacade() {
        this.init();
    }

    private void init() {
        this._stackExpressions = new Stack<AbstractExpression>();
        this._stackExpressions.push(new FourDigits());
        this._stackExpressions.push(new TreeDigits());
        this._stackExpressions.push(new TwoDigits());
        this._stackExpressions.push(new OneDigits());
    }

    public void execute(String numberRoman) {
        Context context = new Context(numberRoman);

        this._stackExpressions.forEach(expression -> expression.interpret(context));

        System.out.println(numberRoman + " = " + Integer.toString(context.getOut()));
    }
}