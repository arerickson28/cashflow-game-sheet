
// let gameSheet = {
//     cash: 0,
//     stocksMutualsCDs: [
//         {
//         "name": "MYT4U",
//         "no. shares": 5,
//         "cost/share": 10,
//         "dividends": 0
//         },
//         {
//         "name": "OK4U",
//         "no. shares": 10,
//         "cost/share": 8,
//         "dividends": 0
//         }
//     ],
//     realEstate: [
//         {
//         "type": "3br/2ba",
//         "downPay": 20000,
//         "cost": 100000,
//         "cashflow": 200
//         }
//     ],
//     businesses: [
//         {
//         "name": "My Pizza Business",
//         "downPay": 5000,
//         "cost": 15000,
//         "cashflow": 300
//         }
    
//     ],
//     liabilities: {
//         homeMortgage: 70000,
//         schoolLoans: 25000,
//         carLoans: 2000,
//         creditCards: 1200,
//         retailDebt: 700,
//         reEsMortgages: function () {
//             let mortgages = []
//             for (let i=0; i< this.realEstate.length; i++) {
//                 mortgages.push({
//                     "type": this.realEstate[i].type,
//                     "mortgage": this.realEstate[i].cost - this.realEstate[i].downPay
//                 })
//             }
//             return mortgages
//         },
//         businessDebts: function () {
//             let bDebts = []
//             for (let x=0; x< this.businesses.length; x++) {
//                 bDebts.push({
//                     "name": this.businesses[x].name,
//                     "debt": this.businesses[x].cost - this.businesses[x].downPay
//                 })
//             }
//             return bDebts
//         },
//         bankLoans: [10000, 5000]
//     },
//     interestIncome: 0,
//     dividendIncome: function() {
//         let income = 0
//         for(let y=0; y< this.stocksMutualsCDs.length; y++) {
//             income += this.stocksMutualsCDs[y].dividends
//         }
//         return income
//     },
//     realEstateIncome: function() {
//         let income = 0
//         for(let y=0; y< this.realEstate.length; y++) {
//             income += this.realEstate[y].cashflow
//         }
//         return income
//     },
//     businessIncome: function() {
//         let income = 0
//         for(let y=0; y< this.businesses.length; y++) {
//             income += this.businesses[y].cashflow
//         }
//         return income
//     },
//     monthlySalary: 3020,
//     passiveIncome: function() {
//         return this.interestIncome + this.dividendIncome() + this.realEstateIncome() + this.businessIncome()
//     },
//     totalIncome: function() {
//         return this.monthlySalary + this.passiveIncome
//     },
//     expenses: {
//         taxes: 500,
//         homeMortgagePayment: 55,
//         schoolLoanPayment: 60,
//         carPayment: function() {
//             return this.liabilities.carLoans * 0.05
//         },
//         creditCardPayment: function() {
//             return this.liabilities.creditCards * 0.2
//         },
//         retailPayment: 0,
//         otherExpenses: 10,
//         numberOfChildren: 2,
//         perChildExpense: 100,
//         childExpenses: function() {
//             return this.numberOfChildren * this.perChildExpense
//         },
//         bankLoanPayment: function() {
//             let payment = 0
//             for(let i=0; i< this.liabilities.bankLoans.length; i++){
//                 payment += this.liabilities.bankLoans[i] * 0.1
//             }
//             return payment
//         } 
//     },
//     totalExpenses: function() {
//         return this.expenses.taxes + this.expenses.homeMortgagePayment + this.expenses.schoolLoanPayment + this.expenses.carPayment() + this.expenses.creditCardPayment() + this.expenses.retailPayment + this.expenses.otherExpenses + this.expenses.childExpenses() + this.expenses.bankLoanPayment()
//     },
//     cashflow: function() {
//         return this.totalIncome - this.totalExpenses
//     }


// }
let assets = {
    cash: 0,
    stocksMutualsCDs: [
        {
        "id": "a",
        "name": "MYT4U",
        "no. shares": 5,
        "cost/share": 10,
        "dividends": 0
        },
        {
        "id": "b",
        "name": "OK4U",
        "no. shares": 10,
        "cost/share": 8,
        "dividends": 0
        }
    ],
    realEstate:  [
        {
        "id": "a",
        "type": "3br/2ba",
        "downPay": 20000,
        "cost": 100000,
        "cashflow": 200
        }
    ],
    businesses: [
        {
        "id": "a",
        "name": "My Pizza Business",
        "downPay": 5000,
        "cost": 15000,
        "cashflow": 300
        }
    
    ]


}




        let liabilities = {
        homeMortgage: 70000,
        schoolLoans: 25000,
        carLoans: 2000,
        creditCards: 1200,
        retailDebt: 700,
        reEsMortgages: function () {
            let mortgages = []
            for (let i=0; i< assets.realEstate.length; i++) {
                mortgages.push({
                    "type": assets.realEstate[i].type,
                    "mortgage": assets.realEstate[i].cost - assets.realEstate[i].downPay
                })
            }
            return mortgages
        },
        businessDebts: [
            {
                id: "a",
                name: "My Pizza Business",
                debt: 10000
            }
        ],
        bankLoans: [
            {
                id: "a",
                amount: "10000"
            },
            {
                id: "b",
                amount: "5000"
            }
        ]
          
    }


    let income = {
        interestIncome: 0,
    dividendIncome: function() {
        let income = 0
        for(let y=0; y< assets.stocksMutualsCDs.length; y++) {
            income += assets.stocksMutualsCDs[y].dividends
        }
        return income
    },
    realEstateIncome: function() {
        let income = 0
        for(let y=0; y< assets.realEstate.length; y++) {
            income += assets.realEstate[y].cashflow
        }
        return income
    },
    businessIncome: 300
    // [
    //     {
    //     "id": "a",
    //     "name": "My Pizza Business",
    //     "downPay": 5000,
    //     "cost": 15000,
    //     "cashflow": 300
    //     }
    //  ] 
    ,
    monthlySalary: 3020,
    passiveIncome: function() {
        return this.interestIncome + this.dividendIncome() + this.realEstateIncome() + this.businessIncome()
    },
    totalIncome: 3520,

    }
        

let expenses =  {
            taxes: 500,
            homeMortgagePayment: 55,
            schoolLoanPayment: 60,
            carPayment: 100,
            creditCardPayment: 240,
            retailPayment: 0,
            otherExpenses: 10,
            numberOfChildren: 2,
            perChildExpense: 100,
            childExpenses: 200,
            bankLoanPayment: 1500,
            totalExpenses: 2665,
        }
        
let cashflow = {
    cashflow: 855
}

export { assets, liabilities, income, expenses, cashflow }


