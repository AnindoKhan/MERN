import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
export default props =>{
    const {id} = props;
    const [product, setProduct] = useState({})
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");

    useEffect(() =>{
        axios.get('http://localhost:8000/api/product/' + id )
        .then(response => {
            setProduct(response.data)

        })
    },[])
    const updateProduct = product => {
        console.log("updaterequest is being made")
        axios.put("http://localhost:8000/api/product/" + id + "/edit" ,{
            product
        })
        .then(response =>  navigate('/product'))
        .catch(error => console.log(error));

    }
    return (
        <div>
            <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            <DeleteButton productId={product._id} successCallback={() => navigate("/product")}/>

            {/* <h1> Upadate a Product </h1>
            <form onSubmit={updateProduct} > 
                <p>
                    <label> Title</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label> Price</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label> Description </label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </p>
                <button> Submit </button>
            </form> */}
        </div>
    )
}
