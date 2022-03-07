import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"

import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newDividendIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"

function SellBus() {


    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn, newStockBtn, setNewStockBtn, sellStockBtn, setSellStockBtn, sellREBtn, setSellREBtn, sellBusBtn, setSellBusBtn } = useShareMyStates()


    const [sellBusState, setSellBusState] = useState({
        "name": ""
    })

    function handleBusSubmit(e) {
        console.log(sellBusState)
        // storeAssets.stocksMutualsCDs.push(sellStockState)
        for (let i=0; i<storeAssets.businesses.length; i++) {
            if (storeAssets.businesses[i]["name"] == sellBusState["name"]) {

                storeAssets.businesses.pop(i)

                // storeAssets.realEstate[i]["no. shares"] -= sellStockState["no. shares"]
            }
        }

        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setSellBusBtn(false)

        storeIncome.newBusinessIncome = newBusinessIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()

        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)

        setSellBusState({
            "name": "",
        })
        e.preventDefault()
    }
    return (
    <>
      
    <form onSubmit={handleBusSubmit}>
        <select onChange={(e)=>setSellBusState({
            ...sellBusState,
            "name": e.target.value
        })}>
            <option>--choose Business--</option>
            {assetState.businesses.map((bus) => {
                return (
                    <option value={bus.name}>{bus.name}</option>
                )
            })}
            
        </select>


       
        <br></br>

        <input type="submit" value="Submit"></input>
        <button onClick={()=>setSellBusBtn(false)}>Cancel</button>

    </form>

</>
)
}

export default SellBus
