// import React from 'react';

const Title = ({ text,className,...props }) => {
    return (
        <h1 {...props} className={`capitalize xl:text-4xl lg:text-3xl md:text-lg sm:text-base font-extrabold text-pink-100 text-center italic ${className}`} >
            {text}
        </h1>
    );
};

export default Title;