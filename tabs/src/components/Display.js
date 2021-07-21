import React from 'react';

function Display(props){
    const {currentContent} = props
    return(
        <h1> {currentContent}</h1>
    )
}
export default Display;