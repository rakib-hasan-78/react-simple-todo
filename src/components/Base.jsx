// import React from 'react';
import Header from './Header';
import Application from './Application';

const Base = () => {
    return (
        <div className="w-full min-h-screen flex  flex-wrap items-center justify-center">
            <Header />
            <Application />
        </div>
    );
};

export default Base;