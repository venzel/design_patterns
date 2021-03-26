package adaptersimpleshipping;

public class Main {
    public static void main(String[] args) {
        ShippingAdapter shippingAdapter = new ShippingAdapter(new Fedex());

        double amount = shippingAdapter.calculate(50);

        System.out.println(amount);
    }
}