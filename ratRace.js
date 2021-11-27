// Assets
let cash = 0 ;
let stocksMutualsCDs = [
    {
    "name": "MYT4U",
    "no. shares": 5,
    "cost/share": 10,
    "dividends": 0
    },
    {
    "name": "OK4U",
    "no. shares": 10,
    "cost/share": 8,
    "dividends": 0
    }
]

let realEstate = [
    {
    "type": "3br/2ba",
    "downPay": 20000,
    "cost": 100000,
    "cashflow": 200
    }
]

let businesses = [
    {
    "name": "My Pizza Business",
    "downPay": 5000,
    "cost": 15000,
    "cashflow": 300
    }

]
//liabilities
let homeMortgage = 0 ;
let schoolLoans = 0 ;
let creditCards = 0 ;
let retailDebt = 0 ;
let reEsMortgages = function () {
    let mortgages = []
    for (let i=0; i<realEstate.length; i++) {
        mortgages.push({
            "type": realEstate[i].type,
            "mortgage": realEstate[i].cost - realEstate[i].downPay
        })
    }
    return mortgages
}
let businessDebts = function () {
    let bDebts = []
    for (let x=0; x<businesses.length; x++) {
        bDebts.push({
            "name": businesses[i].name,
            "debt": businesses[i].cost - businesses[i].downPay
        })
    }
    return bDebts
}

let bankLoans = [
   10000,
   5000
]

// Passive Income
let interestIncome = 0 ;

let dividendIncome = function() {
    let income = 0
    for(let y=0; y<stocksMutualsCDs.length; y++) {
        income += stocksMutualsCDs[y].dividends
    }
    return income
};

let realEstateIncome = function() {
    let income = 0
    for(let y=0; y<realEstate.length; y++) {
        income += realEstate[y].cashflow
    }
    return income
}

let businessIncome = function() {
    let income = 0
    for(let y=0; y<businesses.length; y++) {
        income += businesses[y].cashflow
    }
    return income
} ;

// Income
let monthlySalary = 3020 ;
let passiveIncome = interestIncome + dividendIncome() + realEstateIncome() + businessIncome() ;
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

let bankLoanPayment = function() {
    let payment = 0
    for(let i=0; i<bankLoans.length; i++){
        payment += bankLoans[i] * 0.1
    }
    return payment
} ;

console.log(`Child Expenses: ${childExpenses}`) ;

let totalExpenses = taxes + homeMortgagePayment + schoolLoanPayment + carPayment + creditCardPayment + retailPayment + otherExpenses + childExpenses + bankLoanPayment() ;

console.log(`Total Expenses: ${totalExpenses}`)

// MonthlyCashflow
let cashflow = totalIncome - totalExpenses ;
console.log(`Monthly Cashflow: ${cashflow}`) ;

function addCashflow() {
    cash += cashflow
}



// Adding Relations to HTML
let currentCashEl = document.getElementById("currentCash")
currentCashEl.textContent = cash;

let addCashflowBtn = document.getElementById("addCashflow")

for(let i=0; i<document.getElementsByClassName("cashflow").length; i++) {
    document.getElementsByClassName("cashflow")[i].textContent = cashflow;
}

addCashflowBtn.addEventListener("click", function() {
    cash += cashflow;
    currentCashEl.textContent = cash;
})

document.getElementById("totalIncome").textContent = totalIncome;
document.getElementById("totalExp").textContent = totalExpenses;