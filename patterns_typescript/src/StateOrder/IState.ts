interface IState {
    awaitingPayment(): IState
    paymentConfirmed(): IState
    separatingProduct(): IState
    productShipped(): IState
    status(): void
}

export { IState }
