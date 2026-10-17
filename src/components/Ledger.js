import React, { useState } from "react"
import store from "store"
import { storeAssets } from "../Data/dataFunc"
import {YellowBox, YellowH1} from "./StyledComponents"
import { useShareMyStates } from '../Data/SharedStatesContext';



function Ledger() {

    const testData = [
        {
            "name": "stock purchase",
            "details": "bought 5 shares of MYT4U at cost of $8/share"
        },
        {
            "name": "property sale",
            "details": "sold WonderfulHouse for $20,000"
        }
    ]

  

    return (
        <>
            <YellowBox>
                <YellowH1>Event Ledger</YellowH1>
                <br></br>

                <hr></hr>
                <table>
                    <thead>
                        <tr>
                            <th>event</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testData.map((ev) => {
                            return (

                                <tr key={ev.id}>
                                    <td>{ev.name}</td>
                                    <td>{ev.details}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

            </YellowBox>

        </>
    )
}

export default Ledger