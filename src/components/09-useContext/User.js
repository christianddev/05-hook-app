import React from 'react'

const User = ({user}) => {
    return (
        <pre>
            {JSON.stringify(user, null, 3)}
        </pre>
    )
}

export default User
