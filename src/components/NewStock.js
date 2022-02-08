import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"



import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newDividendIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"


const useSharedStates = ()=> {
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
    const [newBusinessBtn, setNewBusinessBtn] = useState(false)
}


function NewStock() {


    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn, newStockBtn, setNewStockBtn } = useShareMyStates()


    const [newStockState, setNewStockState] = useState({
        "name": "",
        "no. shares": 0,
        "cost/share": 0,
        "dividens/share": 0
    })


    function handleStockSubmit(e) {
        console.log(newStockState)
        storeAssets.stocksMutualsCDs.push(newStockState)
        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setNewStockBtn(false)
        storeIncome.dividendIncome = newDividendIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()
        store.set("income", storeIncome)
        setIncomeState(storeIncome)
        setNewStockState({
            "name": "",
            "no. shares": 0,
            "cost/share": 0,
            "dividends/share": 0
        })
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleStockSubmit}>
            
                <input onInput={e=>setNewStockState({
                    ...newStockState,
                    // "id": storeAssets.businesses.length += 1,
                    "name": e.target.value
                })} type="text"></input>

                <input onInput={e=>setNewStockState({
                    ...newStockState,
                    "no. shares": parseInt(e.target.value)
                })} type="number" min="0" step="5"></input>

                <input onInput={e=>setNewStockState({
                    ...newStockState,
                    "cost/share": parseInt(e.target.value)
                })}type="number" min="0" step="5"></input>

                <input onInput={e=>setNewStockState({
                    ...newStockState,
                    "dividends/share": parseInt(e.target.value)
                })}type="number" step="5"></input>
                <br></br>
                <input type="submit" value="Submit" />
    
            </form>
   
        </>
    )
}

export default NewStock