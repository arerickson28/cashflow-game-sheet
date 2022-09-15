import React from "react";
import {Link} from "react-router-dom"


function NavBar() {

    return (
        <>
      
            <div id="navbar">
           
            <Link to="/cashflow-game-sheet/">Home</Link>
            <Link to="/cashflow-game-sheet/gamesheet">GameSheet</Link>
            <Link to="/cashflow-game-sheet/instantiate">InstantiateSheet</Link>
            </div>
        </>
    )
}

export default NavBar