import './App.css';
import {data} from './component/data'
import Detelas from "./component/deteles/Detelas";
import { useState } from 'react';
import SideCart from './component/Side_cart/SideCart';
import { Toaster } from 'react-hot-toast';



function App() {
    const [time,settime] = useState(0)
  return (
    <div className='web-main'>
      <Toaster />
      <div className='main-left'>
      <Detelas settime={settime}  time={time} data = {data}/>
      </div>
      <div className='main_right'>
        <SideCart  time={time}/>
      </div>
    </div>
  );
}


export default App;
