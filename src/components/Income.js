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

    return (
        <>
        <BlueBox>
        <h2>This is the income component</h2>
        </BlueBox>
   
        </>
    )
}


export default Income