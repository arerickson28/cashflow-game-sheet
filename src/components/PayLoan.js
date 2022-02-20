import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"

import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, newTotalExpenses, storeCashflow, newCashflow, storeLiabilities } from "../Data/dataFunc"


function PayLoan() {
    const { liabilityState, setLiabilityState, payLoanBtn, setPayLoanBtn } = useShareMyStates()


    const [loanPaymentState, setLoanPaymentState] = useState({
        "loan": "",
        "amount": 0
    })

    function handleLoanPayment() {
        setPayLoanBtn(false)
        console.log(loanPaymentState["loan"], loanPaymentState.amount)
        let chosenLoan = loanPaymentState["loan"]

        for (let i=0; i<storeLiabilities["bankLoans"].length; i++) {
            if (storeLiabilities["bankLoans"][i]["amount"] == chosenLoan) {
                storeLiabilities["bankLoans"][i]["amount"] -= loanPaymentState.amount
                store.set("liabilities", storeLiabilities)
                setLiabilityState(storeLiabilities)
            }
        }
               


        setLoanPaymentState({
            "liability": "",
            "amount": 0
        })
    }


    return (
        <>
            <form onSubmit={handleLoanPayment}>
                <select onChange={(e)=>setLoanPaymentState({
                    ...loanPaymentState,
                    "loan": e.target.value
                })}>
                    <option>--choose loan--</option>
                    {liabilityState.bankLoans.map((loan) => {
                        return (
                            <option value={loan.amount}>{loan.amount}</option>
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







