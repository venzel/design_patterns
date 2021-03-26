package interpreterromannumber.expressions;

public abstract class AbstractExpression {

    public void interpret(Context context) {
        if (context.getIn().length() == 0)
            return;

        if (context.getIn().startsWith(this.nine())) {
            this.refactoreOut(context, 9);
            this.refactoreIn(context, 2);
        }

        if (context.getIn().startsWith(this.four())) {
            this.refactoreOut(context, 4);
            this.refactoreIn(context, 2);
        }

        if (context.getIn().startsWith(this.five())) {
            this.refactoreOut(context, 5);
            this.refactoreIn(context, 1);
        }

        while (context.getIn().startsWith(this.one())) {
            this.refactoreOut(context, 1);
            this.refactoreIn(context, 1);
        }
    }

    private void refactoreIn(Context context, int substring) {
        context.setIn(context.getIn().substring(substring));
    }

    private void refactoreOut(Context context, int number) {
        context.setOut(context.getOut() + (number * this.multiply()));
    }

    public abstract String one();

    public abstract String four();

    public abstract String five();

    public abstract String nine();

    public abstract int multiply();
}