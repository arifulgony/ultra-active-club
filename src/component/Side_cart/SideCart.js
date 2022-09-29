import React, { useState } from 'react';
import toast from 'react-hot-toast';
import "./SideCart.css";
import img from '..//../img/ariful.jpg';



const SideCart = ({time}) => {
    const [end,setend] = useState(localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")) :0,)

    const click = ()=>{ toast.success('Successfully')}

    const setends = (second)=>{
        setend(second)
        localStorage.setItem("cartdata", JSON.stringify(second));
    }

    return (
        <div className='site-cart'>
            <div className='myself'>
            <img src={img} alt="" /><h1>Ariful Islam</h1>
            </div>
            <div className='details'>
                <div><samp className='weight'>54</samp><samp>kg</samp> <p>Weight</p></div>
                <div><samp className='weight'>5.4</samp><p>Height</p></div>
                <div><samp className='weight'>19</samp> <p>Age</p></div>
            </div>
            <div>
                <h2>Add A Break</h2>
                <div className='time'>
                    <button onClick={()=>setends(10)}>10s</button>
                    <button onClick={()=>setends(20)}>20s</button>
                    <button onClick={()=>setends(30)}>30s</button>
                    <button onClick={()=>setends(40)}>40s</button>
                    <button onClick={()=>setends(50)}>50s</button>
                </div>
            </div>

            <div>
                <h2>Exercise Details</h2>
                <div className='time-added'>
                    <h2>Exercise time</h2>
                    <h2 className='text-color'>{time} seconds</h2>
                </div>
                <div className='time-added'>
                    <h2>Break time</h2>
                    <h2 className='text-color'>{end} seconds</h2>
                </div>
            </div>
            <div>
                <button className='activity-button' onClick={click}>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideCart;