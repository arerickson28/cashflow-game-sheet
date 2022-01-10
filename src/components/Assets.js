import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow } from "../Data/dataFunc"

function Assets() {
    
    return (
        <>
            <h2>Assets component</h2>
        </>
    )
}

export default Assets