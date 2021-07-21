import React from 'react';
function NumberComponent(props){
    const {input,color,bc} = props;
    if (isNaN(+input)){
        if (input === "home"){
            return (
                <h1> Welcome home doofus</h1>
            );
        } else {
            return (
                <h1 style={{backgroundColor:color, color:bc}}> The word is: {input}</h1>
            );
        }
    } else {
        return (
            <h1> The number is: {input}</h1>
        )
    }
}
export default NumberComponent;