import React, { useState } from "react"
import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import store from "store"
import {useShareMyStates, storeIncome, storeExpenses, storeAssets, storeLiabilities, storeCashflow, newChildExpenses, newTotalExpenses, newCreditCardPayment, newBankLoanPayment, newCarPayment, newCashflow, newTotalIncome } from "../Data/dataFunc"

function Cashflow() {

    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()
    return (
            <>
            <h2>Cashflow Calculator</h2> 
            <h4>Total Income: $<span>{incomeState.totalIncome}</span></h4>
            <h4>Total Expenses: $<span>{expensesState.totalExpenses}</span></h4>
            <h4>Monthly Cashflow: <span>${cashflowState.cashflow}</span></h4>
            </>  
        )
    }

  

export default Cashflow