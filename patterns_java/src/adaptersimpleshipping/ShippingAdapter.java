package adaptersimpleshipping;

public class ShippingAdapter implements IShipping {
    private final IShipping _shipping;

    public ShippingAdapter(IShipping shipping) {
        this._shipping = shipping;
    }

    @Override
    public double calculate(double amount) {
        return this._shipping.calculate(amount);
    }
}