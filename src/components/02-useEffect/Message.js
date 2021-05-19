
import React, { useEffect, useState } from 'react'

const Message = ({message}) => {

    const [coors, setCoors] = useState({x:0, y:0})

    const mouseMove = (e) => setCoors({x:e.x, y:e.y});
    
    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>{message}</h3>
            <p>x:{coors.x} - y:{coors.y}</p>
        </div>
    )
}
export default Message;
