import React from 'react';
import axios from 'axios';
export default props=> {
    const{productId, successfulCallBack}= props;
    const deleteProduct = e => {
        axios.delete('http://localhost8000/api/product/' + productId)
            .then (res=>{
                successfulCallBack();
            })
    }
    return (
        <button onClick = {deleteProduct}> Delete </button>
    )
}