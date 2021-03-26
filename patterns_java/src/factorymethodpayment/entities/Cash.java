package factorymethodpayment.entities;

public class Cash implements IPayment {
    private String _name = "Cash";

    public Cash() {
    }

    @Override
    public void getName() {
        System.out.println(this._name);
    }

}