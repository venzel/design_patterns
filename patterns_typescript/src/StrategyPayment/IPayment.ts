interface IPayment {
    getName(): string
    getAmount(): number
    pay(): number
}

export { IPayment }
