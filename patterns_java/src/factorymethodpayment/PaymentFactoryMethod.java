package factorymethodpayment;

import java.util.HashMap;
import java.util.Map;

import factorymethodpayment.entities.BankSlip;
import factorymethodpayment.entities.Cash;
import factorymethodpayment.entities.CreditCard;
import factorymethodpayment.entities.IPayment;

public class PaymentFactoryMethod implements IPaymentFactoryMethod {
    private Map<String, IPayment> _mapFactoryPayments;

    public PaymentFactoryMethod() {
        this.init();
    }

    private void init() {
        this._mapFactoryPayments = new HashMap<String, IPayment>();
        this._mapFactoryPayments.put("cartaocredito", new CreditCard());
        this._mapFactoryPayments.put("boletobancario", new BankSlip());
        this._mapFactoryPayments.put("dinheiro", new Cash());
    }

    public IPayment createPayment(String paymentType) {
        IPayment payment = null;

        if (this._mapFactoryPayments.containsKey(paymentType))
            payment = this._mapFactoryPayments.get(paymentType);

        return payment;
    }
}