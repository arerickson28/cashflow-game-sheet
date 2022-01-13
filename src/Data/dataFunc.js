import store from "store"
import { useState } from "react"
import { useBetween } from "use-between"

let storeIncome = store.get("income")
let storeExpenses = store.get("expenses")
let storeAssets = store.get("assets")
let storeLiabilities = store.get("liabilities")
let storeCashflow = store.get("cashflow")

const useSharedStates = ()=> {
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
    return {
        assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState
    }
}

const useShareMyStates = ()=> useBetween(useSharedStates)




let newChildExpenses = function() {
    return storeExpenses.numberOfChildren * storeExpenses.perChildExpense
}

let newTotalExpenses = function() {
    return storeExpenses.taxes + storeExpenses.homeMortgagePayment + storeExpenses.schoolLoanPayment + storeExpenses.carPayment + storeExpenses.creditCardPayment + storeExpenses.retailPayment + storeExpenses.otherExpenses + storeExpenses.childExpenses + storeExpenses.bankLoanPayment
}

let newCarPayment = function() {
    return storeLiabilities.carLoans * 0.05
}

let newCreditCardPayment = function() {
    return storeLiabilities.creditCards * 0.2
}

let newBankLoanPayment = function() {
    let payment = 0
    for(let i=0; i< storeLiabilities.bankLoans.length; i++){
        payment += storeLiabilities.bankLoans[i] * 0.1
    }
    return payment
}

let newCashflow = function() {
    return storeIncome.totalIncome - storeExpenses.totalExpenses
 }

 let newTotalIncome = function() {
    return storeIncome.monthlySalary + storeIncome.passiveIncome()
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
    for(let y=0; y< storeAssets.businesses.length; y++) {
        storeIncome.newBusinessIncome += storeAssets.businesses[y].cashflow
    }
}

let newDividendIncome = function() {
    for(let y=0; y< storeAssets.stocksMutualsCDs.length; y++) {
        let totalSpecificStockHoldingsDividendIncome = storeAssets.stocksMutualsCDs[y]["no. shares"] * storeAssets.stocksMutualsCDs[y]["dividends/share"]
        storeIncome.dividendIncome += totalSpecificStockHoldingsDividendIncome
    }
}


let newReEsMortgages = function () {
    
    for (let i=0; i< storeAssets.realEstate.length; i++) {
        storeLiabilities.reEsMortgages.push({
            "type": storeAssets.realEstate[i].type,
            "mortgage": storeAssets.realEstate[i].cost - storeAssets.realEstate[i].downPay
        })
    }
}

let newRealEstateIncome = function() {
    for(let y=0; y< storeAssets.realEstate.length; y++) {
        storeIncome.realEstateIncome += storeAssets.realEstate[y].cashflow
    }
}

let newTotalPassiveIncome = function() {
    return storeIncome.interestIncome + storeIncome.dividendIncome + storeIncome.realEstateIncome + storeIncome.businessIncome
}

export {useShareMyStates, storeIncome, storeExpenses, storeAssets, storeLiabilities, storeCashflow, newChildExpenses, newTotalExpenses, newCreditCardPayment, newBankLoanPayment, newCarPayment, newCashflow, newTotalIncome, newBusinessDebts, newBusinessIncome, newDividendIncome, newReEsMortgages, newRealEstateIncome, newTotalPassiveIncome }