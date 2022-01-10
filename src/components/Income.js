import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow } from "../Data/dataFunc"


const BlueBox = styled.div`
border: solid 4px rgb(20, 20, 167);
padding: 5px;
margin: 10px;
`

const useSharedStates = ()=> {
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
}



function Income() {

    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()

    return (
        <>
        <BlueBox>
        <h2>Income</h2>
        <p>Monthly Salary: $<span>{incomeState.monthlySalary}</span></p>
        <p>Business Income: $<span>{incomeState.businessIncome}</span></p>
        <p>Total Income: $<span>{incomeState.totalIncome}</span></p>
        </BlueBox>
   
        </>
    )
}


export default Income