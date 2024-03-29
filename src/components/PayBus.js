import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeLiabilities } from "../Data/dataFunc"

function PayBus() {
    const { liabilityState, setLiabilityState, setPayBusBtn } = useShareMyStates()

    const [busPaymentState, setBusPaymentState] = useState({
        "business": "",
        "amount": 0
    })

    function handleBusPayment() {
        setPayBusBtn(false)
        // console.log(busPaymentState["liability"], liabPaymentState.amount)
        let chosenBusiness = busPaymentState["business"]

        for (let i=0; i<storeLiabilities["businessDebts"].length; i++)
            if (storeLiabilities["businessDebts"][i]["name"] === chosenBusiness) {
                storeLiabilities["businessDebts"][i]["debt"] -= busPaymentState.amount
            }
              
            store.set("liabilities", storeLiabilities)
            setLiabilityState(storeLiabilities)

        setBusPaymentState({
            "business": "",
            "amount": 0
        })
    }

    return (
        <>
        <form onSubmit={handleBusPayment}>
            <select onChange={(e)=>setBusPaymentState({
                ...busPaymentState,
                "business": e.target.value
            })}>
                <option>--choose business--</option>
                {liabilityState.businessDebts.map((bus) => {
                    return (
                        <option value={bus.name}>{bus.name}</option>
                    )
                })}
                
            </select>

            <input type="number" step="50" onInput={(e) =>setBusPaymentState({
                 ...busPaymentState,
                 "amount": parseInt(e.target.value)
            }) }></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            <button onClick={()=> setPayBusBtn(false)}>Cancel</button>
        </form>
    </>
    )
}

export default PayBus