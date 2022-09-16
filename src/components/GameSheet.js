import React from "react"
import {useShareMyStates} from "../Data/dataFunc"
import InstantiateSheet from "./InstantiateSheet"
import Expenses from "./Expenses"
import Cashflow from "./Cashflow"
import Liabilities from './Liabilities';
import Assets from './Assets';
import Income from './Income';



function GameSheet() {
    const { instantiateSheetState, setInstantiateSheetState, newSheetBtn, setNewSheetBtn } = useShareMyStates()

    return (
        <>
        <div className="App">

          {newSheetBtn ? <InstantiateSheet /> : 

          <>
          <div>
                <button onClick={()=> {setNewSheetBtn(true)}}>Start New Gamesheet</button>
                </div>

                <div className="incExp">
                <Income />
                <Cashflow />
                <Expenses />
                </div>

                <div className="assLiab">
                <Assets />
                <Liabilities />
                </div>
        </>}

              

                {/* <button>Reset Sheet</button> */}
        </div>
        </>
    )
}


export default GameSheet