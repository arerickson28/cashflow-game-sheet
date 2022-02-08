import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"



import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"


const useSharedStates = ()=> {
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
    const [newBusinessBtn, setNewBusinessBtn] = useState(false)
}


function NewBus() {


    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn } = useShareMyStates()


    const [newBusState, setNewBusState] = useState({
        "name": "",
        "downPay": 0,
        "cost": 0,
        "cashflow": 0
    })

    // const [newBusinessBtn, setNewBusinessBtn] = useState("hide")

    function hanldeBusinessSubmit(e) {
        console.log(newBusState)
        storeAssets.businesses.push(newBusState)
        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setNewBusinessBtn(false)
        storeIncome.businessIncome = newBusinessIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()
        store.set("income", storeIncome)
        setIncomeState(storeIncome)
        setNewBusState({
            "name": "",
            "downPay": 0,
            "cost": 0,
            "cashflow": 0
        })
        e.preventDefault()
    }


    return (
        <>
             <form onSubmit={hanldeBusinessSubmit}>
            
            <input onInput={e=>setNewBusState({
                ...newBusState,
                // "id": storeAssets.businesses.length += 1,
                "name": e.target.value
            })} type="text"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "downPay": parseInt(e.target.value)
            })} type="number" min="0" step="100"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "cost": parseInt(e.target.value)
            })}type="number" min="0" step="100"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "cashflow": parseInt(e.target.value)
            })}type="number" step="50"></input>
            <br></br>
            <input type="submit" value="Submit" />
    
        </form>
        
        </>
    )

}

export default NewBus