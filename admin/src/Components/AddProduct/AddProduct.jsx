import React from 'react'
import './AddProduct.css'
import upload from '../../assets/upload.png'
import { useState } from 'react';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        price: "",
    })
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async () => {
        console.log(productDetails)
        let responseData;
        let product = { ...productDetails };
        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://127.0.0.1:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data })
        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch("http://127.0.0.1:4000/addproduct", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then()
        }
    }
    return (
        <div className='addproduct'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type='text' value={productDetails.price} onChange={changeHandler} name='price' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='addprice-selector'>
                    <option value="none">None</option>
                    <option value="Day_cracker">Day</option>
                    <option value="Night_cracker">Night</option>
                    <option value="Crackers_collections">Giftbox</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload} className='addproduct-image' />

                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden:true />
            </div>
            <button onClick={() => { Add_Product() }} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default AddProduct