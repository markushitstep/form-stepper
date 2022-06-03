import React from 'react'

const MyInput = (props) => {
    const {error, blurprops} = props
    return (
        <>
        <input {...props} />
        {
           (blurprops && error) && <div className='error-div'>{error}</div>
        }
        </>
    )
};

export default MyInput;
