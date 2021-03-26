package interpretersimpleexpression;

import java.util.Stack;

public class Evaluator {
    public AbstractExpression parse(String text) {
        Stack<AbstractExpression> stack = new Stack<AbstractExpression>();

        String[] parts = text.split(" ");

        for (String part : parts) {
            AbstractExpression prev = null, next = null;

            switch (part) {
                case "+":
                    prev = stack.pop();
                    next = stack.pop();
                    stack.push(new Add(prev, next));
                    break;

                case "-":
                    prev = stack.pop();
                    next = stack.pop();
                    stack.push(new Mul(prev, next));
                    break;

                case "*":
                    prev = stack.pop();
                    next = stack.pop();
                    stack.push(new Mul(prev, next));
                    break;

                case "/":
                    prev = stack.pop();
                    next = stack.pop();
                    stack.push(new Div(prev, next));
                    break;

                default:
                    stack.push(new Const(Integer.parseInt(part)));
                    break;
            }
        }

        return stack.pop();
    }
}