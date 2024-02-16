import React, { useContext } from 'react'
import MyContext from './context/MyContext';

const UseContextComponet = () => {
    const data = useContext(MyContext);
    return (
        <div>
            <h1> UseContextComponet</h1>
            <h2> {data.author}</h2>
            <h2> {data.address}</h2>
            <h2> {data.ph}</h2>
        </div>
    )
}

export default UseContextComponet