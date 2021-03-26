package adaptershippingwithprocessor;

public class FedexProcessor implements IShipping {
    private FedexExternalAPI _service;

    public FedexProcessor() {
        this._service = new FedexExternalAPI();
    }

    @Override
    public double calculate(double amount) {
        return this._service.calculateFedex(amount) + 30;
    }
}