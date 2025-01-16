import React from 'react';

const Button = ({btnName, className, onAction,   ...props}) => {
    return (
        <button type='button' {...props} className={`border px-5 py-2 capitalize font-bold cursor-pointer rounded-md mx-auto ${className}`} onClick={onAction} >
            {btnName}
        </button>
    );
};

export default Button;