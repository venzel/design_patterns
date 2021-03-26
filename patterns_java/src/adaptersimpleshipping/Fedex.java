package adaptersimpleshipping;

public class Fedex implements IShipping {
    @Override
    public double calculate(double amount) {
        return 20 + amount;
    }
}