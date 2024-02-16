import React, { useState } from "react";

const UseStateComponent = () => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h1>
                - Use state example -

            </h1>
            <h2> Counter : {counter}</h2>
            <button className="btn btn-primary" onClick={increaseCounter}> Increment</button>
            <button className="btn btn-secondary" onClick={decreaseCounter}> Increment</button>
        </div>
    )
}

export default UseStateComponent;