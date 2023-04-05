import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeCashflow, storeExpenses, newTotalExpenses, newBankLoanPayment, newCashflow, storeLiabilities, storeAssets } from "../Data/dataFunc"
function NewLoan() {
    const { setCashflowState, setExpensesState, setAssetState,liabilityState, setLiabilityState, setPayLoanBtn, setNewLoanBtn } = useShareMyStates()
    const [newLoanState, setNewLoanState] = useState({
        "loanName": "",
        "amount": 0
    })
    function handleNewLoan() {
        setNewLoanBtn(false)
        console.log("new loan handled")
        console.log(newLoanState["loanName"], newLoanState.amount)

        let newLoanLiability = {
            "name": newLoanState["loanName"],
            "amount": newLoanState["amount"],
            "remaining": newLoanState["amount"]
        }
        storeLiabilities.bankLoans.push(newLoanLiability)
       
        store.set("liabilities", storeLiabilities)
        setLiabilityState(storeLiabilities)
        storeAssets.cash += newLoanState.amount
        store.set("assets", storeAssets)
        setAssetState(storeAssets)
        storeExpenses.bankLoanPayment = newBankLoanPayment()
     
        storeExpenses.totalExpenses = newTotalExpenses()
        store.set("expenses", storeExpenses)
        setExpensesState(storeExpenses)
     
        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)
        setNewLoanState({
            "loanName": "",
            "amount": 0
        })
        console.log(liabilityState)
        console.log(storeLiabilities)
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>amount</th>
                    </tr>
                </thead>
            </table>
            <form onSubmit={handleNewLoan}>
            <input type="text" step="50" onInput={(e) =>setNewLoanState({
                     ...newLoanState,
                     "loanName": e.target.value
                }) }></input>

            <input type="number" step="50" onInput={(e) =>setNewLoanState({
                     ...newLoanState,
                     "amount": parseInt(e.target.value)
                }) }></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            <button onClick={()=>setNewLoanBtn(false)}>Cancel</button>
            </form>
        </>
    )
}
export default NewLoan