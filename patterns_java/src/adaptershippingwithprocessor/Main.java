package adaptershippingwithprocessor;

public class Main {
    public static void main(String[] args) {
        // IShipping sedexProcessor = new SedexProcessor();
        IShipping fedexProcessor = new FedexProcessor();

        IShipping shippingAdapter = new ShippingAdapter(fedexProcessor);

        double amount = shippingAdapter.calculate(20);

        System.out.println(amount);
    }
}