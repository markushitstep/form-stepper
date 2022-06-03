import React from 'react'

const MyInput = (props) => {
    const {error, hasblur, ...rest} = props
    return (
        <>
        <input {...rest} />
        {
           (hasblur && error) && <div className='error-div'>{error}</div>
        }
        </>
    )
};

export default MyInput;
