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
let liabilities = {
    homeMortgage: 70000,
    schoolLoans: 25000,
    carLoans: 2000,
    creditCards: 1200,
    retailDebt: 700,
    reEsMortgages: function () {
        let mortgages = []
        for (let i=0; i<realEstate.length; i++) {
            mortgages.push({
                "type": realEstate[i].type,
                "mortgage": realEstate[i].cost - realEstate[i].downPay
            })
        }
        return mortgages
    },
    businessDebts: function () {
        let bDebts = []
        for (let x=0; x<businesses.length; x++) {
            bDebts.push({
                "name": businesses[x].name,
                "debt": businesses[x].cost - businesses[x].downPay
            })
        }
        return bDebts
    },
    bankLoans: [10000, 5000]
}

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



// Expenses
let expenses = {
    taxes: 500,
    homeMortgagePayment: 55,
    schoolLoanPayment: 60,
    carPayment: function() {
        return liabilities.carLoans * 0.05
    },
    creditCardPayment: function() {
        return liabilities.creditCards * 0.2
    },
    retailPayment: 0,
    otherExpenses: 10,
    numberOfChildren: 2,
    perChildExpense: 100,
    childExpenses: function() {
        return this.numberOfChildren * this.perChildExpense
    },
    bankLoanPayment: function() {
        let payment = 0
        for(let i=0; i< liabilities.bankLoans.length; i++){
            payment += liabilities.bankLoans[i] * 0.1
        }
        return payment
    } 
}






let totalExpenses = expenses.taxes + expenses.homeMortgagePayment + expenses.schoolLoanPayment + expenses.carPayment() + expenses.creditCardPayment() + expenses.retailPayment + expenses.otherExpenses + expenses.childExpenses() + expenses.bankLoanPayment() ;

// MonthlyCashflow
let cashflow = totalIncome - totalExpenses ;

// --------------------------------
// Adding Relations to HTML
// --------------------------------
let currentCashEl = document.getElementById("currentCash")
currentCashEl.textContent = cash;

let addCashflowBtn = document.getElementById("addCashflow")



function cashflowCalculator() {
    totalExpenses = expenses.taxes + expenses.homeMortgagePayment + expenses.schoolLoanPayment + expenses.carPayment() + expenses.creditCardPayment() + expenses.retailPayment + expenses.otherExpenses + expenses.childExpenses() + expenses.bankLoanPayment() ;

    cashflow = totalIncome - totalExpenses

    for(let i=0; i<document.getElementsByClassName("cashflow").length; i++) {
        document.getElementsByClassName("cashflow")[i].textContent = cashflow;
    }
    
    document.getElementById("totalIncome").textContent = totalIncome;
    document.getElementById("totalExp").textContent = totalExpenses;
}

 cashflowCalculator()

addCashflowBtn.addEventListener("click", function() {
    cash += cashflow;
    currentCashEl.textContent = cash;
    console.log(cash)
})



let htmlExpensesArray = document.querySelectorAll("#expenses p")

function expensesCalculator() {

    for(let i=0; i< htmlExpensesArray.length; i++) {
        let currentElement = htmlExpensesArray[i].children[0]
        let elId = currentElement.getAttribute("id")
        for (expense in expenses) {
            if (elId == expense) {
                if(typeof(expenses[expense]) == "function") {
                    currentElement.textContent = expenses[elId]()
                } else {
                    currentElement.textContent = expenses[elId]
                }
                
            }
        }
        
    }
}

expensesCalculator()

let htmlLiabilitiesArray = document.querySelectorAll("#liabilities p")

for(let i=0; i< htmlLiabilitiesArray.length; i++) {
    let currentElement = htmlLiabilitiesArray[i].children[0]
  
    let elId = currentElement.getAttribute("id")

    for (liab in liabilities) {
        if (elId == liab) {
            if(typeof(liabilities[liab]) == "function") {
                currentElement.textContent = liabilities[elId]()
            } else {
                currentElement.textContent = liabilities[elId]
            }
            
        }
    }
    
}

let addChildBtn = document.getElementById("addChild")

addChildBtn.addEventListener("click", function() {
    expenses.numberOfChildren += 1
    console.log(expenses.numberOfChildren)
    expensesCalculator()
    cashflowCalculator()
})