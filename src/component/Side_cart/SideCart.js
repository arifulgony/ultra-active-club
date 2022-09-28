import React, { useState } from 'react';
import toast from 'react-hot-toast';
import "./SideCart.css"

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
                <h1>Ariful Islam</h1>
            </div>
            <div className='details'>
                <div><samp className='weight'>54</samp><samp>kg</samp> <p>Weight</p></div>
                <div><samp className='weight'>54</samp><samp>kg</samp> <p>Weight</p></div>
                <div><samp className='weight'>54</samp><samp>kg</samp> <p>Weight</p></div>
            </div>
            <div>
                <h2>Add A Break</h2>
                <div>
                    <button onClick={()=>setends(10)}>10s</button>
                    <button onClick={()=>setends(20)}>20s</button>
                    <button onClick={()=>setends(30)}>30s</button>
                    <button onClick={()=>setends(40)}>40s</button>
                    <button onClick={()=>setends(50)}>50s</button>
                </div>
            </div>

            <div>
                <h2>Exercise Details</h2>
                <div>
                    <h2>Exercise time</h2>
                    <h2>{time} seconds</h2>
                </div>
                <div>
                    <h2>Break time</h2>
                    <h2>{end} seconds</h2>
                </div>
            </div>
            <div>
                <button onClick={click}>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideCart;