import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"



import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, storeIncome, storeLiabilities, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"





function NewRE() {


    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn } = useShareMyStates()

    const [newREState, setNewREState] = useState({
        "type": "",
        "downPay": 0,
        "cost": 0,
        "cashflow": 0
    })

    function handleRESubmit(e) {

        storeAssets.realEstate.push(newREState)

        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setNewREBtn(false)

        storeIncome.realEstateIncome = newRealEstateIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()

        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        let newRELiability = {
            "type": newREState["type"],
            "mortgage": newREState["cost"] - newREState["downPay"]
        }

        storeLiabilities.reEsMortgages.push(newRELiability)
        store.set("liabilities", storeLiabilities)
        setLiabilityState(storeLiabilities)


        setNewREState({
            "type": "",
            "downPay": 0,
            "cost": 0,
            "cashflow": 0
        })
        e.preventDefault()
    }


    return (
        <>
         <table>
                <thead>
                    <tr>
                        <th>type</th>
                        <th>down payment</th>
                        <th>cost</th>
                        <th>cashflow</th>
                    </tr>
                </thead>
            </table>
        <form onSubmit={handleRESubmit}>
            
            <input onInput={e=>setNewREState({
                ...newREState,
                // "id": storeAssets.businesses.length += 1,
                "type": e.target.value
            })} type="text"></input>

            <input onInput={e=>setNewREState({
                ...newREState,
                 "downPay": parseInt(e.target.value)
            })} type="number" min="0" step="100"></input>

            <input onInput={e=>setNewREState({
                ...newREState,
                 "cost": parseInt(e.target.value)
            })}type="number" min="0" step="100"></input>

            <input onInput={e=>setNewREState({
                ...newREState,
                 "cashflow": parseInt(e.target.value)
            })}type="number" step="50"></input>
            <br></br>
            <input type="submit" value="Submit" />
            <button onClick={()=>setNewREBtn(false)}>Cancel</button>
        </form>
        </>
    )

}

export default NewRE