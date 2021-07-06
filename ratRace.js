// Passive Income
let interestIncome = 0 ;
let dividendIncome = 0 ;
let realEstateIncome = 250 ;
let businessIncome = 0 ;

// Income
let monthlySalary = 3020 ;
let passiveIncome = interestIncome + dividendIncome + realEstateIncome + businessIncome ;
let totalIncome = monthlySalary + passiveIncome ;
console.log(`Total Income: ${totalIncome}`)


// Expenses
let taxes = 500 ;
let homeMortgagePayment = 0 ;
let schoolLoanPayment = 0 ;
let carPayment = 0 ;
let creditCardPayment = 0 ;
let retailPayment = 50 ;
let otherExpenses = 0 ;
// 
let numberOfChildren = 2 ;
let perChildExpense = 100 ;
// 
let childExpenses = numberOfChildren * perChildExpense ;
let bankLoanPayment = 0 ;

console.log(`Child Expenses: ${childExpenses}`) ;

let totalExpenses = taxes + homeMortgagePayment + schoolLoanPayment + carPayment + creditCardPayment + retailPayment + otherExpenses + childExpenses + bankLoanPayment ;

console.log(`Total Expenses: ${totalExpenses}`)

// MonthlyCashflow
let cashflow = totalIncome - totalExpenses ;
console.log(`Monthly Cashflow: ${cashflow}`) ;

// Assets
let cash = 0 ;

//liabilities
let homeMortgage = 0 ;
let schoolLoans = 0 ;
let creditCards = 0 ;
let retailDebt = 0 ;