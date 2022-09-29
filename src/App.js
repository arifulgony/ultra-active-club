import './App.css';
import {data} from './component/data'
import Detelas from "./component/deteles/Detelas";
import { useState } from 'react';
import SideCart from './component/Side_cart/SideCart';
import { Toaster } from 'react-hot-toast';
import Header from './component/header/Header';
import Fooder from './component/fooder/Fooder';



function App() {
    const [time,settime] = useState(0)
  return (
   <div className="full-display">
    <div className="main-container">
    <div className='cart-container'>
     <Header></Header>
      <Toaster></Toaster>
      <div className='main-left'>
      <Detelas settime={settime}  time={time} data = {data}></Detelas>
      </div>
    </div>
    <div className='main_right'>
      <SideCart time={time}></SideCart>
      </div>
    </div>
      <Fooder></Fooder>
      <br/>
      <br/>
   </div>

  );
}


export default App;
