import React, { useState } from 'react';
import '../css/Header.css';
import {CiShoppingBasket} from "react-icons/ci";
import {CiLight} from "react-icons/ci";
import {FaMoon} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const navigate = useNavigate();
    
    const [theme, setTheme] = useState(false);
    
    const changeTheme = () =>{
        const root = document.getElementById("root");
        if(!theme){
            root.style.backgroundColor="black";
            root.style.color="#fff";
        }else{
            root.style.backgroundColor="#fff";
            root.style.color="black";
        }
        setTheme(!theme);
    }
    
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row' onClick={() => navigate("/")}>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text'>Uğur ÇANGAL e-Comm</p>
        </div>
        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Bir şeyler ara' />
            <div>
                {theme ? <CiLight className='icon' onClick={changeTheme}/> : <FaMoon className='icon' onClick={changeTheme}/>}
                <CiShoppingBasket className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header