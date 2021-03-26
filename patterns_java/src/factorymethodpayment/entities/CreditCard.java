package factorymethodpayment.entities;

public class CreditCard implements IPayment {
    private String _name = "CreditCard";

    public CreditCard() {
    }

    @Override
    public void getName() {
        System.out.println(this._name);
    }
}