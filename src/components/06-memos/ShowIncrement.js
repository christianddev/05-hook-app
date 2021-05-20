import React from 'react'
import PropTypes from 'prop-types';

const ShowIncrement = React.memo(({increment}) => {
    console.log('ShowIncrement')
    return (
        <div>
            <button
                onClick={() => increment(5)}
                className="btn btn-primary"
            >+1</button>
        </div>
    )
})

ShowIncrement.propTypes= {
    increment:  PropTypes.func.isRequired 
}

export default ShowIncrement;
