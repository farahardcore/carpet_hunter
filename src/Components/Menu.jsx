import React from 'react';
import AnyBtn from "./AnyBtn";
function MainMenu() {
    return(
        <div className="menu">
            <AnyBtn name="START"/>
            <AnyBtn name="LEVEL" />
            <AnyBtn name="SCORES" />
        </div>


    )
}
export default MainMenu;