import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets } from "../Data/dataFunc"


const useSharedStates = ()=> {
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
}

const OrangeBox = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    `

function Assets() {
    
    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()

    const [addSubState, setAddSubState] = useState(0)

    function handleChange(e) {
        setAddSubState(parseInt(e.target.value))
    }

    function handleSubmit(e) {
        storeAssets.cash += addSubState
        setAssetState(storeAssets)
        setAddSubState(0)
        e.preventDefault()

    }


    return (
        <>
        <OrangeBox>
        <h1>Assets</h1>
        <p>Cash : $<span>{assetState.cash}</span></p>
        <button>Add/Subtract</button>
        {/* <button>Subtract</button> */}
        <br></br>

        {/* <div>
            <input type="number"></input>
            <button>Submit</button>
        </div> */}

        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="number" value={addSubState} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>




        {/* <div >
            <label>Subtract Amount:</label>
            <input type="number"></input>
            <button>Submit</button>
        </div> */}
       
        {/* </div> */}
        
        <hr></hr>
        <p>Stocks/Mutuals/CDs</p>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>no. shares</th>
                    <th>cost/share</th>
                    <th>dividends/share</th>
                </tr>
            </thead>
            <tbody>
            { assetState.stocksMutualsCDs.map((stock) => {
                return (
                    <tr key={stock.id}>
                        <td>{stock.name}</td>
                        <td>{stock["no. shares"]}</td>
                        <td>{stock["cost/share"]}</td>
                        <td>{stock["dividends/share"]}</td>
                    </tr>
                   
                )
            })}
            </tbody>
        </table>

        <hr></hr>

        <p>Real Estate</p>   
        <table>
            <thead>
                <tr>
                    <th>type</th>
                    <th>down payment</th>
                    <th>cost</th>
                    <th>cashflow</th>
                </tr>
            </thead>
            <tbody>
            { assetState.realEstate.map((estate) => {
                return (
                    <tr key={estate.id}>
                        <td>{estate.type}</td>
                        <td>{estate.downPay}</td>
                        <td>{estate.cost}</td>
                        <td>{estate.cashflow}</td>
                    </tr>
                
                )
            })}
            </tbody>
        </table>



        <hr></hr>

        <p>Businesses</p>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>down payment</th>
                    <th>cost</th>
                    <th>cashflow</th>
                </tr>
            </thead>
            <tbody>
            { assetState.businesses.map((business) => {
                return (
                    <tr key={business.id}>
                        <td>{business.name}</td>
                        <td>{business.downPay}</td>
                        <td>{business.cost}</td>
                        <td>{business.cashflow}</td>
                    </tr>
                   
                )
            })}
            </tbody>
        </table>
        <hr></hr>


      
        </OrangeBox>
         
        </>
    )
}

export default Assets