import React from 'react';
import "./Deteles.css"
const Detelas = ({data,settime,time}) => {


    const submit = (second)=>{
        settime(time+second)
    }

    return (
        <div className='mane'> 
            {
                data && data.map((item,index)=>{
                    return(
                        <div key={index} className="cart">
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.dec}</p>
                            <span>For Age :{item.age}</span><br/>
                            <span>Time required :{item.time}s</span>
                            <button onClick={()=>submit(item.time)}>add to list</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Detelas;