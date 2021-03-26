        state = state.awaitingPayment()
        state = state.paymentConfirmed()
        state = state.separatingProduct()
        state = state.productShipped()