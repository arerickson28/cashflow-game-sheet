import React, { useState } from "react"
import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

function Cashflow() {

    const [assetState, setAssetState] = useState(assets)
    const [liabilityState, setLiabilityState] = useState(liabilities)
    const [incomeState, setIncomeState] = useState(income)
    const [expensesState, setExpensesState] = useState(expenses)
    const [cashflowState, setCashflowState] = useState(cashflow())
    return (
            <>
            <h2>Cashflow Calculator</h2> 
            <h4>Total Income: $<span>{incomeState.totalIncome()}</span></h4>
            <h4>Total Expenses: $<span>{expensesState.totalExpenses()}</span></h4>
            <h4>Monthly Cashflow: <span>${cashflowState}</span></h4>
            </>  
        )
    }

  

export default Cashflow