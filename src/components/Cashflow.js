import React from "react"
import store from "store"
import styled from "styled-components"
import {useShareMyStates, storeAssets, storeCashflow } from "../Data/dataFunc"
import {GoldBox, GoldH1} from "./StyledComponents"

// const GoldBox = styled.div`
// border: solid 4px rgb(0,139,139);
// padding: 5px;
// margin: 10px;
// `

// const GoldH1 = styled.h1`
//     color: white;
//     background-color: rgb(0,139,139);
// `

function Cashflow() {

    const { setAssetState, incomeState, expensesState, cashflowState } = useShareMyStates()

   function changeState() {

    let tempStoreAssets = storeAssets
    tempStoreAssets.cash = parseInt(tempStoreAssets.cash) + parseInt(storeCashflow.cashflow)

    store.set("assets", tempStoreAssets)

    setAssetState(store.get("assets"))

   }

    return (
            <>
            <GoldBox>

           
            <GoldH1>Cashflow Calculator</GoldH1>
            <h4>Total Income: $<span>{incomeState.totalIncome}</span></h4>
            <h4>Total Expenses: $<span>{expensesState.totalExpenses}</span></h4>
            <h4>Monthly Cashflow: <span>${cashflowState.cashflow}</span></h4>
            <button onClick={() => changeState()}>Receive Monthly Cashflow</button>
            </GoldBox>
            </>  
        )
    }

  

export default Cashflow