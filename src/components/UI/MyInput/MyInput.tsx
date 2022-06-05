import React from 'react'

interface InputProps {
    key: number;
    name: string;
    type: string;
    error: string;
    placeholder: string;
    value: string;
    hasblur: boolean;
    onBlur: (e:React.FocusEvent<HTMLInputElement>) => void; 
    onChange: (e:React.FocusEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<InputProps> = (props) => {
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
