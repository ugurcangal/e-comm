import React from 'react'
import '../css/Product.css'
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
    
    const {id,price,image,title,description} = product;
    
    const navigate = useNavigate();

    
  return (
    <div className='card flex-column'>
        <img src={image} alt="" className='image'/>
        <div>
          <p style={{textAlign:"center", height:'50px'}}>{title}</p>
          <h3 style={{textAlign:"center"}}>{price}₺</h3>
        </div>
        <div>
          <button onClick={() => navigate("/product-details/"+ id)} className='btn'>Detayına Git</button>
        </div>
    </div>
  )
}

export default Product