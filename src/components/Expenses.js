import React from "react"
import styled from "styled-components"
import store from "store"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow } from "../Data/dataFunc"


const GreenBox = styled.div`
border: solid 4px rgb(85, 200, 85);
padding: 5px;
margin: 10px;
width: 500px;
`

const GreenH1 = styled.h1`
    color: white;
    background-color: rgb(85, 200, 85);
`


function Expenses() {
 
   const { expensesState, setExpensesState, setCashflowState } = useShareMyStates()


    const changeState = () => {

     
        storeExpenses.numberOfChildren ++

        storeExpenses.childExpenses = newChildExpenses()

        storeExpenses.totalExpenses = newTotalExpenses()

        store.set("expenses", storeExpenses)

        setExpensesState(store.get("expenses"))
       
        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
      
        setCashflowState(store.get("cashflow"))
    }
 
    return (
        <>
              <GreenBox>
                <GreenH1>Expenses</GreenH1>
                <p>Taxes: $<span>{expensesState.taxes}</span></p>
                <p>Home Mortgage: $<span>{expensesState.homeMortgagePayment}</span></p>
                <p>School Loan Payment: $<span>{expensesState.schoolLoanPayment}</span></p>
                <p>Car Payment: $<span>{expensesState.carPayment}</span></p>
                <p>Credit Card Payment: $<span>{expensesState.creditCardPayment}</span></p>
                <p>Retail Payment: $<span>{expensesState.retailPayment}</span></p>
                <p>Bank Loan Payment: $<span>{expensesState.bankLoanPayment}</span></p>
                <p>Other Expenses: $<span>{expensesState.otherExpenses}</span></p>
                <hr></hr>
                <p>Number of Children: <span>{expensesState.numberOfChildren}</span></p>
                <p>Per Child Expense: $<span>{expensesState.perChildExpense}</span></p>
                <p>Child Expenses: $<span>{expensesState.childExpenses}</span></p>
                <button onClick={() => changeState()}>Add Child</button>
                <hr></hr>
                <p>Total Expenses: $<span>{expensesState.totalExpenses}</span></p>
            </GreenBox>
        </>
    )
}

export default Expenses


     