import React, {useState} from 'react'
import axios from 'axios';
import ProductList from './ProductList';
export default (props) =>{
    const {onSubmitProp, initialTitle, initialPrice, initialDescription} = props;
    console.log("props in update:", props)
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    console.log("state in update", {title,price,description})
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title,price, description});
    }
    // const createProduct = () => {
    //     axios.post('http://localhost:8000/api/product', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res => setProducts([...products,res.data ]))
    //         .catch(err => console.error(err))
    // }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <p>
                    <label> Title </label><br/>
                    <input type="text" onChange ={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label> Price </label><br/>
                    <input type="text" onChange ={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label> Description </label><br/>
                    <input type="text" onChange ={(e) => setDescription(e.target.value)} value={description}/>
                </p>
                <button> Submit</button>
            </form>
        </div>
    )
}