package factorymethodpayment;

import factorymethodpayment.entities.IPayment;

public class Main {
    public static void main(String[] args) {
        IPaymentFactoryMethod paymentFactoryMethod = new PaymentFactoryMethod();

        IPayment payment = paymentFactoryMethod.createPayment("dinheiro");

        payment.getName();
    }
}