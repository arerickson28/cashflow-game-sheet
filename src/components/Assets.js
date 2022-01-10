import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow } from "../Data/dataFunc"

function Assets() {
    
    const OrangeBox = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    `

    

    return (
        <>
        <OrangeBox>
        <h2>Assets component</h2>
        </OrangeBox>
         
        </>
    )
}

export default Assets