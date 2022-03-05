import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"



import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newDividendIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"

function SellRE() {


    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn, newStockBtn, setNewStockBtn, sellStockBtn, setSellStockBtn, sellREBtn, setSellREBtn } = useShareMyStates()


    const [sellREState, setSellREState] = useState({
        "name": ""
    })


    function handleStockSubmit(e) {
        console.log(sellREState)
        // storeAssets.stocksMutualsCDs.push(sellStockState)
        for (let i=0; i<storeAssets.realEstate.length; i++) {
            if (storeAssets.realEstate[i]["name"] == sellREState["name"]) {

                storeAssets.realEstate.pop(i)

                // storeAssets.realEstate[i]["no. shares"] -= sellStockState["no. shares"]
            }
        }



        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setSellREBtn(false)

        storeIncome.realEstateIncome = newRealEstateIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()

        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)

        setSellREState({
            "name": "",
        })
        e.preventDefault()
    }

    return (
        <>
      
            <form onSubmit={handleStockSubmit}>
                <select onChange={(e)=>setSellREState({
                    ...sellREState,
                    "name": e.target.value
                })}>
                    <option>--choose Real Estate--</option>
                    {assetState.realEstate.map((re) => {
                        return (
                            <option value={re.name}>{re.name}</option>
                        )
                    })}
                    
                </select>


                {/* <input type="number" step="1" onInput={(e) =>setSellStockState({
                 ...sellStockState,
                 "no. shares": parseInt(e.target.value)
                }) }></input> */}
                <br></br>

                <input type="submit" value="Submit"></input>
                <button onClick={()=>setSellREBtn(false)}>Cancel</button>
    
            </form>
   
        </>
    )
}

export default SellRE