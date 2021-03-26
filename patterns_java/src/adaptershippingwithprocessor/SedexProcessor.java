package adaptershippingwithprocessor;

public class SedexProcessor implements IShipping {
    private SedexExternalAPI _service;

    public SedexProcessor() {
        this._service = new SedexExternalAPI();
    }

    @Override
    public double calculate(double amount) {
        return this._service.calculateSedex(amount) + 10;
    }
}