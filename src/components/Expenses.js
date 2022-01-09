import React, { useState } from "react"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import { storeExpenses, newChildExpenses } from "../Data/dataFunc"

const GoldBox = styled.div`
border: solid 4px rgb(240, 240, 75);
padding: 5px;
`



function Expenses() {
    // const [numChildren, addChild] = useState(expenses.numberOfChildren)
    // const [totalExpenses, updateExp] = useState(expenses.totalExpenses())
    // const [currenCashflow, updateCashflow] = useState(cashflow())
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))


    const changeState = () => {

     
        storeExpenses.numberOfChildren ++

        storeExpenses.childExpenses = newChildExpenses()

        store.set("expenses", storeExpenses)
        setExpensesState(store.get("expenses"))
       
        let newCashflow = function() {
            return income.totalIncome() - expenses.totalExpenses()
         }
        setCashflowState(newCashflow())
    }
 
    return (
        <>
              <div>
                <h2>Expenses</h2>
                <p>Taxes: $<span>{expensesState.taxes}</span></p>
                <p>Home Mortgage: $<span>{expensesState.homeMortgagePayment}</span></p>
                <p>School Loan Payment: $<span>{expensesState.schoolLoanPayment}</span></p>
                <p>Car Payment: $<span>{expenses.carPayment()}</span></p>
                <p>Credit Card Payment: $<span>{expenses.creditCardPayment()}</span></p>
                <p>Retail Payment: $<span>{expensesState.retailPayment}</span></p>
                <p>Other Expenses: $<span>{expensesState.otherExpenses}</span></p>
                <GoldBox>
                <p>Number of Children: <span>{expensesState.numberOfChildren}</span></p>
                <p>Per Child Expense: <span>{expensesState.perChildExpense}</span></p>
                <p>Child Expenses: $<span>{expensesState.childExpenses}</span></p>
                <button onClick={() => changeState()}>Add Child</button>
                </GoldBox>
                <p>Bank Loan Payment: $<span>{expenses.bankLoanPayment()}</span></p>
            </div>
        </>
    )
}

export default Expenses


     