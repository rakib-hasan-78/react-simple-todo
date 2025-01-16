// import React from 'react';
import Title from './../utilities/Title';

const Header = () => {
    return (
        <div className='xl:w-3/6 lg:w-4/6 md:w-5/6 sm:w-5/6 msm:w-5/6 xsm:w-5/6  mx-auto my-2 py-4 bg-gradient-to-r from-zinc-200/20 from-10% via-stone-600/40 via-50% to-gray-800/25 to-90% backdrop-blur-lg  shadow-xl border border-white/20 rounded-lg'>
            <Title text={`welcome to TODO application`}/>
            
        </div>
    );
};

export default Header;