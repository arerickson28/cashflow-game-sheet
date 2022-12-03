import React from "react";
import {Link} from "react-router-dom"


function NavBar() {

    return (
        <>
      
            <div id="navbar">
           
            <h2><Link to="/cashflow-game-sheet/">Home</Link></h2>
            <h2><Link to="/cashflow-game-sheet/gamesheet">Game Sheet</Link></h2>
            <h2><Link to="/cashflow-game-sheet/instantiate">Start New Game Sheet</Link></h2>
            </div>
        </>
    )
}

export default NavBar