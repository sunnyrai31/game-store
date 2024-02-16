import React, { useReducer } from 'react'

const UseReducerComponent = () => {
    const myreducer = (state: any, action: any) => {
        switch (action.type) {
            case 'ADD':
                return { count: state.count + 1 };
            case 'REMOVE':
                return { count: state.count - 1 };
            case 'RESET':
                return { count: 0 };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(myreducer, { count: 0 });
    const increaseCounter = () => {
        dispatch({ type: 'ADD' })
    }
    const decreaseCounter = () => {
        dispatch({ type: 'REMOVE' })
    }
    const reset = () => {
        dispatch({ type: 'RESET' })
    }
    return (
        <div>
            <h1>
                - Use Reducer way example -

            </h1>
            <h2> Counter : {state.count}</h2>
            <button className="btn btn-primary" onClick={increaseCounter}> Increment</button>
            <button className="btn btn-secondary" onClick={decreaseCounter}> Increment</button>
            <button className="btn btn-danger" onClick={reset}> Reset counter</button>
        </div>
    )
}

export default UseReducerComponent;