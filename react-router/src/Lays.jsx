import React, {useState} from "react";



export const Lays = () => {

    const [counter, setCounter] = useState(0)

    return (

        <>
        <div>
            <img src="https://i.makeagif.com/media/8-24-2022/1bhG75.gif" alt="home" />
            <p>{counter}</p>
            <button className="btn" onClick={() => setCounter(prev => prev + 1)}>Add chips</button>

            <a href="">Go back</a>

        </div>
        
        
        </>
    )
}