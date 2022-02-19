import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"

import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newDividendIncome, newTotalIncome, newTotalPassiveIncome, storeLiabilities } from "../Data/dataFunc"


function PayLoan() {
    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn, newStockBtn, setNewStockBtn, payLiabBtn, setPayLiabBtn, payLoanBtn, setPayLoanBtn } = useShareMyStates()


    const [loanPaymentState, setLoanPaymentState] = useState({
        "loan": "",
        "amount": 0
    })

    function handleLoanPayment() {
        setPayLoanBtn(false)
        console.log(loanPaymentState["loan"], loanPaymentState.amount)
        let chosenLoan = loanPaymentState["loan"]

        for (let i=0; i<storeLiabilities["bankLoans"].length; i++)
            if (storeLiabilities["bankLoans"][i]["amount"] === chosenLoan)
                storeLiabilities["bankLoans"][i]["amount"] -= loanPaymentState.amount
                store.set("liabilities", storeLiabilities)
                setLiabilityState(storeLiabilities)


        setLoanPaymentState({
            "liability": "",
            "amount": 0
        })
    }


    { assetState.stocksMutualsCDs.map((stock) => {
        return (
          
            <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock["no. shares"]}</td>
                <td>{stock["cost/share"]}</td>
                <td>{stock["dividends/share"]}</td>
            </tr>
        )
    })}



    return (
        <>
            <form onSubmit={handleLoanPayment}>
                <select onChange={(e)=>setLoanPaymentState({
                    ...loanPaymentState,
                    "loan": e.target.value
                })}>
                    <option>--choose liability--</option>
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







