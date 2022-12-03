import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeIncome, storeLiabilities, storeAssets, newRealEstateIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"





function NewRE() {


    const { setAssetState, setLiabilityState, setIncomeState, setNewREBtn } = useShareMyStates()

    const [newREState, setNewREState] = useState({
        "name": "",
        "type": "",
        "downPay": 0,
        "cost": 0,
        "cashflow": 0
    })

    function handleRESubmit(e) {

        if (newREState["downPay"]  > storeAssets.cash ) {
            alert("Not enough ca$h!")
            return
       }

        storeAssets.cash -= newREState["downPay"]        

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
            "name": newREState["name"],
            "type": newREState["type"],
            "mortgage": newREState["cost"] - newREState["downPay"]
        }

        storeLiabilities.reEsMortgages.push(newRELiability)
        store.set("liabilities", storeLiabilities)
        setLiabilityState(storeLiabilities)


        setNewREState({
            "name": "",
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
                        <th>name</th>
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
                "name": e.target.value
            })} type="text"></input>
            
            <input onInput={e=>setNewREState({
                ...newREState,
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