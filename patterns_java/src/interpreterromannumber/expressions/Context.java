package interpreterromannumber.expressions;

public class Context {
    private String _in;
    private int _out;

    public Context(String in) {
        this._in = in;
        this._out = 0;
    }

    public String getIn() {
        return this._in;
    }

    public void setIn(String in) {
        this._in = in;
    }

    public int getOut() {
        return this._out;
    }

    public void setOut(int out) {
        this._out = out;
    }
}