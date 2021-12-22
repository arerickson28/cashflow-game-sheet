import React from "react"
import styled from "styled-components"
import gameSheet from "../Data/data"

const GoldBox = styled.div`
border: solid 4px rgb(240, 240, 75);
padding: 5px;
`

function Expenses() {
    return (
        <>
              <div>
                <h2>Expenses</h2>
                <p>Taxes: $<span>{gameSheet.expenses.taxes}</span></p>
                <p>Home Mortgage: $<span>{gameSheet.expenses.homeMortgagePayment}</span></p>
                <p>School Loan Payment: $<span>{gameSheet.expenses.schoolLoanPayment}</span></p>
                <p>Car Payment: $<span>{gameSheet.expenses.carPayment}</span></p>
                <p>Credit Card Payment: $<span>{gameSheet.expenses.creditCardPayment}</span></p>
                <p>Retail Payment: $<span>{gameSheet.expenses.retailPayment}</span></p>
                <p>Other Expenses: $<span>{gameSheet.expenses.otherExpenses}</span></p>
                <GoldBox>
                <p>Number of Children: <span>{gameSheet.expenses.numberOfChildren}</span></p>
                <p>Per Child Expense: <span>{gameSheet.expenses.perChildExpense}</span></p>
                <p>Child Expenses: $<span>{gameSheet.expenses.childExpenses()}</span></p>
                <button>Add Child</button>
                </GoldBox>
                <p>Bank Loan Payment: $<span>{gameSheet.expenses.bankLoanPayment}</span></p>
            </div>
        </>
    )
}

export default Expenses


     