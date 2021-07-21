import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const [products, setProducts] = useState([])
    // const {removeFromDom} = props;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(response => setProducts(response.data))
    }, [])

    const removeFromDom = (productId)=> {
        setProducts(products.filter(product => product._id != productId))
    }
    // const delete = (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //     .then (res => {
    //         removeFromDom(productId)
    //         navigate('/product')
    //     })
    // }
    return(
        <div>

            {products.map((product, index)=>{
                return(
                    <p key={index}>
                        <Link to ={"/product/"+ product._id}> {product.title}</Link>
                        <Link to ={"/product/" +product._id +"/edit"}> Edit </Link> 
                        <DeleteButton productId={product._id} successfulCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
            {/* <ul>
            {props.product.map ((product, index)=>{
                return <li> <Link to={"/product/"+ product._id} key= {index}>  {product.title} </Link> <button  onClick={(e)=>{delete(product._id)}}>Delete</button></li>

            })}
            </ul> */}
        </div>
    )
}