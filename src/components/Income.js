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





function Income() {

    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()

    return (
        <>
        <BlueBox>
        <h2>Income</h2>
        <p>Monthly Salary: $<span>{incomeState.monthlySalary}</span></p>
        <hr></hr>
        <h3>Passive Income</h3>
        <p>Interest Income: $<span>{incomeState.interestIncome}</span></p>
        <p>Dividend Income: $<span>{incomeState.dividendIncome}</span></p>
        <p>Real Estate Income: $<span>{incomeState.realEstateIncome}</span></p>
        <p>Business Income: $<span>{incomeState.businessIncome}</span></p>
        <h3>Total Passive Income: $<span>{incomeState.passiveIncome}</span></h3>
        

        <hr></hr>
        <p>Total Income: $<span>{incomeState.totalIncome}</span></p>
        </BlueBox>
   
        </>
    )
}


export default Income