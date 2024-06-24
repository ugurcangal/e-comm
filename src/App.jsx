import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from '@mui/material';
import { calculateTotal, setDrawer } from './redux/slices/basketSlice';


function App() {
  
  const {products, drawer, totalPrice} = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotal());
  }, [])
  
  return (
    <div>
      <PageContainer>
        <Header/>
        <RouterConfig/>
        <Loading/>
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                <div className='flex-row' style={{padding:"20px"}}>
                  <img style={{marginRight:"15px"}} src={product.image} width={50} height={50} alt="" />
                  <p style={{fontFamily:"arial",width:"320px", marginRight:"10px"}}>{product.title} ({product.count} Adet)</p>
                  <p style={{fontFamily:"arial",fontWeight:"bold", marginRight:"20px", width:"60px"}}>{product.price * product.count}₺</p>
                  <button style={{padding:"10px" ,borderRadius:"5px", border:"none", backgroundColor:"red", color:"white"}}>Sil</button>
                </div>
                </div>
              )
            })
          }
          <div style={{textAlign:"center"}}>
            <h2>Toplam tutar: {totalPrice}₺</h2>
          </div>
        </Drawer>
        
      </PageContainer>
    </div>
  )
}

export default App
