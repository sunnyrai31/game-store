import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("Use effect component called", counter);
    }, [counter])

    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h1>
                - UseEffectComponent -

            </h1>
            <h2> Counter : {counter}</h2>
            <button className="btn btn-primary" onClick={increaseCounter}> Increment</button>
            <button className="btn btn-secondary" onClick={decreaseCounter}> Increment</button>
        </div>
    )
}

export default UseEffectComponent;