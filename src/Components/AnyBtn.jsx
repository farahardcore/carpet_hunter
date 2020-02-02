import React from 'react';


function AnyBtn(props) {
    function changePath() {

    }
    return(
        <div className="buttons">
                <button onClick={changePath}  className="buttons_btn" >{props.name}</button>
        </div>
    )
}
export default AnyBtn;