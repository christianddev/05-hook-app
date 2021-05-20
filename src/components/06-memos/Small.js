import React from 'react'

const Small = React.memo(({value}) => {
    console.log('Small')
    return (
        <small>
            {value}
        </small>
    )
});

export default Small
