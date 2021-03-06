import React, { useState } from "react"
import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import store from "store"
import styled from "styled-components"
import {useShareMyStates, storeIncome, storeExpenses, storeAssets, storeLiabilities, storeCashflow, newChildExpenses, newTotalExpenses, newCreditCardPayment, newBankLoanPayment, newCarPayment, newCashflow, newTotalIncome } from "../Data/dataFunc"

const GoldBox = styled.div`
border: solid 4px rgb(240, 240, 75);
padding: 5px;
margin: 10px;
`

function Cashflow() {

    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()

   function changeState() {

    storeAssets.cash += storeCashflow.cashflow

    store.set("assets", storeAssets)

    setAssetState(store.get("assets"))

   }

    return (
            <>
            <GoldBox>

           
            <h2>Cashflow Calculator</h2> 
            <h4>Total Income: $<span>{incomeState.totalIncome}</span></h4>
            <h4>Total Expenses: $<span>{expensesState.totalExpenses}</span></h4>
            <h4>Monthly Cashflow: <span>${cashflowState.cashflow}</span></h4>
            <button onClick={() => changeState()}>Receive Monthly Cashflow</button>
            </GoldBox>
            </>  
        )
    }

  

export default Cashflow