import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeLiabilities } from "../Data/dataFunc" 

function PayRE() {
    const { liabilityState, setLiabilityState, setPayREBtn } = useShareMyStates()

    const [rePaymentState, setREPaymentState] = useState({
        "name": "",
        "amount": 0
    })


    function handleREPayment() {
        setPayREBtn(false)
        console.log(rePaymentState["name"], rePaymentState.amount)
        let chosenRE = rePaymentState["name"]

        for (let i=0; i<storeLiabilities["reEsMortgages"].length; i++)
            if (storeLiabilities["reEsMortgages"][i]["name"] === chosenRE) {
                storeLiabilities["reEsMortgages"][i]["mortgage"] -= rePaymentState.amount
                if(storeLiabilities["reEsMortgages"][i]["mortgage"] == 0) {
                    storeLiabilities["reEsMortgages"].pop(i)
                }
                store.set("liabilities", storeLiabilities)
                setLiabilityState(storeLiabilities)
        }

        setREPaymentState({
            "name": "",
            "amount": 0
        })
    }

    return (
        <form onSubmit={handleREPayment}>
            <select onChange={(e)=>setREPaymentState({
                ...rePaymentState,
                "name": e.target.value
            })}>
                <option>--choose real estate--</option>
                {liabilityState.reEsMortgages.map((re) => {
                    return (
                        <option value={re.name}>{re.name}</option>
                    )
                })}
                
            </select>

            <input type="number" step="50" onInput={(e) =>setREPaymentState({
                 ...rePaymentState,
                 "amount": parseInt(e.target.value)
            }) }></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            <button onClick={()=> setPayREBtn(false)}>Cancel</button>
        </form>
    )
}

export default PayRE