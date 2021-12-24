import React, { useState } from "react"
import styled from "styled-components"

import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

const GoldBox = styled.div`
border: solid 4px rgb(240, 240, 75);
padding: 5px;
`



function Expenses() {
    // const [numChildren, addChild] = useState(expenses.numberOfChildren)
    // const [totalExpenses, updateExp] = useState(expenses.totalExpenses())
    // const [currenCashflow, updateCashflow] = useState(cashflow())
    const [assetState, setAssetState] = useState(assets)
    const [liabilityState, setLiabilityState] = useState(liabilities)
    const [incomeState, setIncomeState] = useState(income)
    let [expensesState, setExpensesState] = useState(expenses)
    const [cashflowState, setCashflowState] = useState(cashflow())


    const changeState = () => {
        // setExpensesState({expensesState.numberOfChildren ++})
        // setExpensesState(expensesState.totalExpenses())
        setCashflowState(cashflowState)
    }
 
    return (
        <>
              <div>
                <h2>Expenses</h2>
                <p>Taxes: $<span>{expenses.taxes}</span></p>
                <p>Home Mortgage: $<span>{expenses.homeMortgagePayment}</span></p>
                <p>School Loan Payment: $<span>{expenses.schoolLoanPayment}</span></p>
                <p>Car Payment: $<span>{expenses.carPayment()}</span></p>
                <p>Credit Card Payment: $<span>{expenses.creditCardPayment()}</span></p>
                <p>Retail Payment: $<span>{expenses.retailPayment}</span></p>
                <p>Other Expenses: $<span>{expenses.otherExpenses}</span></p>
                <GoldBox>
                <p>Number of Children: <span>{expenses.numberOfChildren}</span></p>
                <p>Per Child Expense: <span>{expenses.perChildExpense}</span></p>
                <p>Child Expenses: $<span>{expenses.childExpenses()}</span></p>
                <button onClick={() => changeState()}>Add Child</button>
                </GoldBox>
                <p>Bank Loan Payment: $<span>{expenses.bankLoanPayment()}</span></p>
            </div>
        </>
    )
}

export default Expenses


     