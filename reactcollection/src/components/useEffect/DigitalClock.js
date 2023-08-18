import React, { useEffect, useState } from 'react'
import ShowData from './ShowData';

// [Old] class-components relate to functional components
// useEffect() can be compared to componentDidMount(), componentDidUpdate(), componentWillUnMound() combined
// Functional-components don't have any life cycle


function DigitalClock() {
    const [cTime,setTime] = useState(new Date().toLocaleString());      // current locale dateTime
    const [showData,setShowData] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString());
        },1000);
    },[cTime]);     // Optimize useEffect for which states to depend on, only states in the list will be watched for

    return (
        <div>
            <h1>{cTime}</h1>
            {showData ? <ShowData /> : <p> No data! </p>}            {/* Conditional rendering */}
            <button onClick={() => setShowData(!showData)}>Toggle</button>
        </div>
    )
}

export default DigitalClock