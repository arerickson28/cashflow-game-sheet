import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"
import {useShareMyStates, storeCashflow, storeExpenses, newTotalExpenses, newBankLoanPayment, newCashflow, storeLiabilities, storeAssets } from "../Data/dataFunc"


function PayLoan() {
    const { cashflowState, assetState, expensesState, setCashflowState, setExpensesState, setAssetState,liabilityState, setLiabilityState, payLoanBtn, setPayLoanBtn } = useShareMyStates()


    const [loanPaymentState, setLoanPaymentState] = useState({
        "loanName": "",
        "amount": 0
    })

    function handleLoanPayment() {

        setPayLoanBtn(false)

        console.log(loanPaymentState["loanName"], loanPaymentState.amount)

        let chosenLoan = loanPaymentState["loanName"]

        console.log(chosenLoan, "chosenLoan")
        console.log(storeLiabilities["bankLoans"], "storeLiabilites[bankLoans]")
        console.log("storeLiabilites", storeLiabilities)

        let tempArray = []

        for (let i=0; i < storeLiabilities["bankLoans"].length; i++) {
            if (storeLiabilities["bankLoans"][i].name !== chosenLoan) {
                tempArray.push(storeLiabilities["bankLoans"][i])
            }
            else {
                storeLiabilities["bankLoans"][i]["remaining"] -= loanPaymentState.amount
                if(storeLiabilities["bankLoans"][i]["remaining"] !== 0) {
                    tempArray.push(storeLiabilities["bankLoans"][i])
                } 
            }
        
        }
        
        console.log(tempArray, "tempArray")
        storeLiabilities["bankLoans"] = tempArray

        store.set("liabilities", storeLiabilities)
        setLiabilityState(storeLiabilities)

        storeAssets.cash -= loanPaymentState.amount
        store.set("assets", storeAssets)
        setAssetState(storeAssets)

        storeExpenses.bankLoanPayment = newBankLoanPayment()
     
        storeExpenses.totalExpenses = newTotalExpenses()
        store.set("expenses", storeExpenses)
        setExpensesState(storeExpenses)
     
        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)

       
        setLoanPaymentState({
            "loanName": "",
            "amount": 0
        })

        console.log(liabilityState)
        console.log(storeLiabilities)
    }


    return (
        <>
            <form onSubmit={handleLoanPayment}>
                <select onChange={(e)=>setLoanPaymentState({
                    ...loanPaymentState,
                    "loanName": e.target.value
                })}>
                    <option>--choose loan--</option>
                    {liabilityState.bankLoans.map((loan) => {
                        return (
                            <option value={loan.name}>{loan.name}</option>
                        )
                    })}

                </select>

                <input type="number" step="50" onInput={(e) =>setLoanPaymentState({
                     ...loanPaymentState,
                     "amount": parseInt(e.target.value)
                }) }></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                <button onClick={()=>setPayLoanBtn(false)}>Cancel</button>
            </form>
        </>
    )

}

export default PayLoan







