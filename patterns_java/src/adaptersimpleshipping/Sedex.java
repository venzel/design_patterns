package adaptersimpleshipping;

public class Sedex implements IShipping {
    @Override
    public double calculate(double amount) {
        return 10 + amount;
    }
}