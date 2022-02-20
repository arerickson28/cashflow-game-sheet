import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"

import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newDividendIncome, newTotalIncome, newTotalPassiveIncome, storeLiabilities } from "../Data/dataFunc"


function PayLiab() {
    const { liabilityState, setLiabilityState, expensesState, setExpensesState, cashflowState, setCashflowState, payLiabBtn, setPayLiabBtn } = useShareMyStates()


    const [liabPaymentState, setLiabPaymentState] = useState({
        "liability": "",
        "amount": 0
    })


    function handleLiabPayment() {
        setPayLiabBtn(false)
        console.log(liabPaymentState["liability"], liabPaymentState.amount)
        let chosenLiability = liabPaymentState["liability"]

        storeLiabilities[chosenLiability] -= liabPaymentState.amount
        store.set("liabilities", storeLiabilities)
        setLiabilityState(storeLiabilities)


        setLiabPaymentState({
            "liability": "",
            "amount": 0
        })
    }

    return (
        <>
            <form onSubmit={handleLiabPayment}>
                <select onChange={(e)=>setLiabPaymentState({
                    ...liabPaymentState,
                    "liability": e.target.value
                })}>
                    <option>--choose liability--</option>
                    <option value="homeMortgage">Home Mortgage</option>
                    <option value="schoolLoans">School Loans</option>
                    <option value="carLoans">Car Loans</option>
                    <option value="creditCards">Credit Cards</option>
                    <option value="retailDebt">Retail Debt</option>
                </select>

                <input type="number" step="50" onInput={(e) =>setLiabPaymentState({
                     ...liabPaymentState,
                     "amount": parseInt(e.target.value)
                }) }></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                <button onClick={()=>setPayLiabBtn(false)}>Cancel</button>
            </form>
        </>
    )

}

export default PayLiab