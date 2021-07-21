import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState({});
    // const[loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(response => setProducts(response.data))
            .catch(error => console.log("Error :", error))
    }, []);
    const removeFromDom= productId=>{
        setProducts(products.filter(product => product._id != productId))

    }
    const createProduct = newProduct=> {
        axios.post('http://localhost:8000/api/product', newProduct)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }
    return (
        <>
            <ProductForm setProducts={setProducts} products={products} onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <ProductList product={products} removeFromDom = {removeFromDom} />
        </>
    )
}