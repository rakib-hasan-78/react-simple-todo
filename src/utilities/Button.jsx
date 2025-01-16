import React from 'react';

const Button = ({btnName, className, onAction,   ...props}) => {
    return (
        <button type='button' {...props} className={`border px-5 py-1.5 capitalize font-bold cursor-pointer rounded-md ${className}`} onClick={onAction} >
            {btnName}
        </button>
    );
};

export default Button;