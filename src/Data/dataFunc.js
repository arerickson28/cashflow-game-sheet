import store from "store"
import { useState } from "react"
import { useBetween } from "use-between"

console.log("dataFunc file has been run")

const testSheet =    {
    sheetProfession: "",
    sheetAssets: {
        cash: 0,
        stocksMutualsCDs: [],
        realEstate:  [
            {
                "id": "a",
                "name": "camelot circle",
                "type": "3br/2ba",
                "downPay": 20000,
                "cost": 100000,
                "cashflow": 200
                }
        ],
        businesses: [
            {
                "id": 1,
                "name": "My Pizza Business",
                "downPay": 5000,
                "cost": 15000,
                "cashflow": 300
                }
        ]
    },
    sheetLiabilities: {
        homeMortgage: {
            balance: 70000,
            expensePair: "homeMortgagePayment"
          },
          schoolLoans: {
            balance:  25000,
            expensePair: "schoolLoanPayment"
          },
          carLoans: {
            balance:  2000,
            expensePair: "carPayment"
          },
          creditCards: {
            balance:  1200,
            expensePair: "creditCardPayment"
          },
          retailDebt: {
            balance: 700,
            expensePair: "retailPayment"
          },
        reEsMortgages: [
            {
                "id": "a",
                "name": "camelot cirlce",
                "type": "3br/2ba",
                "mortgage": 80000
            }
        ],
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
                name: "Wells Fargo",
                amount: 10000,
                remaining: 10000
            },
            {
                id: "b",
                name: "Spire Credit Union",
                amount: 5000,
                remaining: 5000
            }
        ]
          
    },
    sheetIncome: {
        interestIncome: 0,
        dividendIncome: 150,
        realEstateIncome: 200,
        businessIncome: 300,
        monthlySalary: 3020,
        passiveIncome: 650,
        totalIncome: 3670,
    },
    sheetExpenses: {
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
    },
    sheetCashflow: {
        cashflow: 1005
    }
    
}

const blankSheet = {
sheetProfession: "",
sheetAssets: {
    cash: 0,
    stocksMutualsCDs: [],
    realEstate:  [],
    businesses: []
},
sheetLiabilities: {
    homeMortgage: {
        balance: 0,
        expensePair: "homeMortgagePayment"
      },
      schoolLoans: {
        balance:  0,
        expensePair: "schoolLoanPayment"
      },
      carLoans: {
        balance:  0,
        expensePair: "carPayment"
      },
      creditCards: {
        balance:  0,
        expensePair: "creditCardPayment"
      },
      retailDebt: {
        balance: 0,
        expensePair: "retailPayment"
      },
    reEsMortgages: [],
    businessDebts: [],
    bankLoans: []
},
sheetIncome: {
    interestIncome: 0,
    dividendIncome: 0,
    realEstateIncome: 0,
    businessIncome: 0,
    monthlySalary: 0,
    passiveIncome: 0,
    totalIncome: 0,
},
sheetExpenses: {
    taxes: 0,
    homeMortgagePayment: 0,
    schoolLoanPayment: 0,
    carPayment: 0,
    creditCardPayment: 0,
    retailPayment: 0,
    otherExpenses: 0,
    numberOfChildren: 0,
    perChildExpense: 0,
    childExpenses: 0,
    bankLoanPayment: 0,
    totalExpenses: 0,
},
sheetCashflow: {
    cashflow: 0
}   
}

function makeObject(obj) {
    let object = {
      "profession": obj.sheetProfession,
      "assets": obj.sheetAssets,
      "liabilities": obj.sheetLiabilities,
      "income": obj.sheetIncome,
      "expenses": obj.sheetExpenses,
      "cashflow": obj.sheetCashflow
    }
  
    return object
  }
  
  
  function setLocalStorageIfNull(obj) {
      let theObj = makeObject(obj)
      let keyArray = Object.keys(theObj)
      let valueArray = Object.values(theObj)
  
      for (let i=0; i<keyArray.length; i++) {
        if (store.get(keyArray[i]) == null) {
          store.set(keyArray[i], valueArray[i])
        }
      }
  }
  
  
  setLocalStorageIfNull(blankSheet)

let storeIncome = store.get("income")
let storeExpenses = store.get("expenses")
let storeAssets = store.get("assets")
let storeLiabilities = store.get("liabilities")
let storeCashflow = store.get("cashflow")
let storeProfession = store.get("profession")

console.log("storeIncome from dataFunc file", storeIncome)   


const useSharedStates = ()=> {
    const [professionState, setProfessionState] = useState(store.get("profession"))
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
    const [newBusinessBtn, setNewBusinessBtn] = useState(false)
    const [newREBtn, setNewREBtn] = useState(false)
    const [newStockBtn, setNewStockBtn] = useState(false)
    const [sellStockBtn, setSellStockBtn] = useState(false)
    const [payLiabBtn, setPayLiabBtn] = useState(false)
    const [payLoanBtn, setPayLoanBtn] = useState(false)
    const [payBusBtn, setPayBusBtn] = useState(false)
    const [payREBtn, setPayREBtn] = useState(false)
    const [sellREBtn, setSellREBtn] = useState(false)
    const [sellBusBtn, setSellBusBtn] = useState(false)
    const [newSheetBtn, setNewSheetBtn] = useState(false)
    const [instantiateSheetState, setInstantiateSheetState] = useState(blankSheet)


    return {
        professionState, setProfessionState, assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn, newStockBtn, setNewStockBtn, sellStockBtn, setSellStockBtn, payLiabBtn, setPayLiabBtn, payLoanBtn, setPayLoanBtn, payBusBtn, setPayBusBtn, payREBtn, setPayREBtn, sellREBtn, setSellREBtn, sellBusBtn, setSellBusBtn, instantiateSheetState, setInstantiateSheetState, newSheetBtn, setNewSheetBtn
    }
}

const useShareMyStates = ()=> useBetween(useSharedStates)


let newChildExpenses = function() {
    return parseInt(storeExpenses.numberOfChildren) * parseInt(storeExpenses.perChildExpense)
}

let newTotalExpenses = function() {
    console.log("newTotalExpenses called")
    return parseInt(storeExpenses.taxes) + parseInt(storeExpenses.homeMortgagePayment) + parseInt(storeExpenses.schoolLoanPayment) + parseInt(storeExpenses.carPayment) + parseInt(storeExpenses.creditCardPayment) + parseInt(storeExpenses.retailPayment) + parseInt(storeExpenses.otherExpenses) + parseInt(storeExpenses.childExpenses) + parseInt(storeExpenses.bankLoanPayment)
}

let newCarPayment = function() {
    return parseInt(storeLiabilities.carLoans) * 0.05
}

let newCreditCardPayment = function() {
    return parseInt(storeLiabilities.creditCards) * 0.2
}

let newBankLoanPayment = function() {
    let payment = 0
    for(let i=0; i< storeLiabilities.bankLoans.length; i++){
        payment += storeLiabilities.bankLoans[i]["amount"] * 0.1
    }
    return payment
}

let newCashflow = function() {
    return storeIncome.totalIncome - storeExpenses.totalExpenses
 }

 let newTotalIncome = function() {
    console.log("newTotalIncome called")
    return parseInt(storeIncome.monthlySalary) + parseInt(storeIncome.passiveIncome)
}

let newBusinessDebts = function () {
    for (let x=0; x< storeAssets.businesses.length; x++) {
        storeLiabilities.businessesDebts.push({
            "name": storeAssets.businesses[x].name,
            "debt": storeAssets.businesses[x].cost - storeAssets.businesses[x].downPay
        })
    }
}

let newBusinessIncome = function() {
    let newBusinessIncome = 0
    for(let y=0; y< storeAssets.businesses.length; y++) {
        newBusinessIncome += storeAssets.businesses[y].cashflow
    }
    console.log(newBusinessIncome, "newBusinessIncome")
    return newBusinessIncome
}

let newRealEstateIncome = function() {
    let newREIncome = 0
    for(let y=0; y< storeAssets.realEstate.length; y++) {
        newREIncome += storeAssets.realEstate[y].cashflow
    }
    return newREIncome
}

let newDividendIncome = function() {
    let newDividendIncome = 0
    for(let y=0; y< storeAssets.stocksMutualsCDs.length; y++) {
        let totalSpecificStockHoldingsDividendIncome = storeAssets.stocksMutualsCDs[y]["no. shares"] * storeAssets.stocksMutualsCDs[y]["dividends/share"]
        newDividendIncome += totalSpecificStockHoldingsDividendIncome
    }
    return newDividendIncome
}


let newReEsMortgages = function () {
    
    for (let i=0; i< storeAssets.realEstate.length; i++) {
        storeLiabilities.reEsMortgages.push({
            "type": storeAssets.realEstate[i].type,
            "mortgage": storeAssets.realEstate[i].cost - storeAssets.realEstate[i].downPay
        })
    }
}



let newTotalPassiveIncome = function() {
    return parseInt(storeIncome.interestIncome) + parseInt(storeIncome.dividendIncome )+ parseInt(storeIncome.realEstateIncome) + parseInt(storeIncome.businessIncome)
}

export {testSheet, blankSheet, useShareMyStates, storeProfession, storeIncome, storeExpenses, storeAssets, storeLiabilities, storeCashflow, newChildExpenses, newTotalExpenses, newCreditCardPayment, newBankLoanPayment, newCarPayment, newCashflow, newTotalIncome, newBusinessDebts, newBusinessIncome, newDividendIncome, newReEsMortgages, newRealEstateIncome, newTotalPassiveIncome }