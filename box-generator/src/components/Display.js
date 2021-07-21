import React, {useState} from 'react';
const Display = props => {
    const {listOfColors} = props
    return(
        <div>
            {listOfColors.map((theColor,t)=>
            <div key={ t } className="box" style={{backgroundColor:theColor}}> </div>
            )}
            
        </div>
    )
}
export default Display;