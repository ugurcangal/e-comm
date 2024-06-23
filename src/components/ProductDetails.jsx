import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const ProductDetails = () => {
    const {id} = useParams();
    const {products, selectedProduct} = useSelector((store) => store.products)
    const {price,image,title,description} = selectedProduct;
    const dispatch = useDispatch();
    
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    
    useEffect(() => {
        getProductById();
    }, [])
    
    const getProductById = () =>{
        products && products.map((product) => {
            if(product.id == id){
                dispatch(setSelectedProduct(product));
            }
        })
    }
    
  return (
    <div style={{marginTop:'60px', display:'flex', flexDirection:'row', justifyContent:"center"}}>
        <div>
            <img src={image} width={300} height={500} alt="" />
        </div>
        <div style={{marginLeft:'50px'}}>
            <h1 style={{fontFamily:"arial"}}>{title}</h1>
            <p style={{fontFamily:"arial", marginTop:"70px"}}>{description}</p>
            <h1 style={{fontFamily:"arial", marginTop:"70px"}}>{price}₺</h1>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                <CiCircleMinus onClick={decrement} style={{fontSize:"40px",marginRight:"5px", cursor:"pointer"}}/> <span style={{fontFamily:"arial",fontSize:"35px"}}>{count}</span>
                 <CiCirclePlus onClick={increment} style={{fontSize:"40px",marginLeft:"5px", cursor:"pointer"}}/>
            </div>
            <div>
                <button style={{marginTop:"25px", border:"none", padding:"18px", backgroundColor:"rgb(141, 163, 179)", borderRadius:"5px", color:"white", cursor:"pointer"}}>Sepete Ekle</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails