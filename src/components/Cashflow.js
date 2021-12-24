import React from "react"
import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

function Cashflow() {
    return (
            <>
            <h2>Cashflow Calculator</h2> 
            <h4>Total Income: $<span>{income.totalIncome()}</span></h4>
            <h4>Total Expenses: $<span>{expenses.totalExpenses()}</span></h4>
            <h4>Monthly Casfhlow: <span>${cashflow()}</span></h4>
            </>  
        )
    }

  

export default Cashflow