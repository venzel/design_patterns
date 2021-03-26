package factorymethodpayment;

import factorymethodpayment.entities.IPayment;

public interface IPaymentFactoryMethod {
    public IPayment createPayment(String paymentType);
}