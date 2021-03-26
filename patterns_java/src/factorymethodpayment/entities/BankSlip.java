package factorymethodpayment.entities;

public class BankSlip implements IPayment {
    private String _name = "BankSlip";

    public BankSlip() {
    }

    @Override
    public void getName() {
        System.out.println(this._name);
    }
}