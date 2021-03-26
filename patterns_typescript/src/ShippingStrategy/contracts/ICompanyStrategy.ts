interface ICompanyStrategy {
    fixed: Readonly<number>
    calculate(amount: number): number
}

export { ICompanyStrategy }
