import React, { useState } from "react"
import styled from "styled-components"

import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

const GoldBox = styled.div`
border: solid 4px rgb(240, 240, 75);
padding: 5px;
`





function addCashflow() {
    assets.cash += cashflow();
}



function Expenses() {
    const [numChildren, addChild] = useState(expenses.numberOfChildren)
 
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
                <p>Number of Children: <span>{numChildren}</span></p>
                <p>Per Child Expense: <span>{expenses.perChildExpense}</span></p>
                <p>Child Expenses: $<span>{expenses.childExpenses()}</span></p>
                <button onClick={() => addChild(numChildren + 1, expenses.numberOfChildren+= 1)}>Add Child</button>
                </GoldBox>
                <p>Bank Loan Payment: $<span>{expenses.bankLoanPayment()}</span></p>
            </div>
        </>
    )
}

export default Expenses


     