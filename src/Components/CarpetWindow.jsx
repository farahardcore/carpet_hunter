import React from "react";

function CarpetWindow() {
    function carpetCatches() {
    console.log("catches")
    }
    return(
        <div onClick={carpetCatches} className="carpet_window">

        </div>
    )
}
export default CarpetWindow;