// import React from 'react';
import Button from './../utilities/Button';

const Modal = ({title, className, onAction,onDiscard, ...props}) => {
    return (
        <div className="bg-slate-700/90 w-full min-h-screen
         p-2 z-30 fixed top-0 left-0 flex justify-center items-center flex-wrap">
            <div className="bg-gradient-to-r from-pink-600/20
             from-10% via-fuchsia-600/40 via-50%
              to-rose-800/25 to-90%
               backdrop-blur-sm 
               bg-opacity-85 
               shadow-xl 
               border 
               border-white/50
                rounded-lg
                  w-11/12 xl:w-5/12 lg:w-5/12 h-2/3
                 flex items-center justify-center
                 flex-col inset-1/2">

                    <div {...props} className="w-full py-3 flex items-center justify-center flex-wrap">
                        <h3 className="text-pink-50 capitalize font-bold text-base xl:text-2xl lg:text-2xl italic" {...props}>{title}</h3>
                    </div>

                    <div className="w-10/12 flex flex-col items-center py-4 pb-6">
                        <input {...props} type="text" name="text" id="text" className={`w-10/12 mx-auto py-2 outline-none border-0 bg-gradient-to-r from-pink-600/40 from-10% via-fuchsia-600/30 via-50% to-rose-800/45 to-90% rounded-md shadow-sm px-2 caret-pink-100 text-pink-50 capitalize ${className}`} placeholder="new data" />
                        <div className='w-full flex items-center justify-center space-x-4 py-6'>
                            <Button {...props} btnName={`confirm`} className={`bg-cyan-700/60 shadow-md shadow-cyan-800/20 border-0 rounded-md text-pink-50`} onClick={onAction}/>
                            <Button {...props} btnName={`cancel`} className={`bg-pink-600 text-pink-50 border-0 shadow-md shadow-pink-800/40 rounded-md`} onClick={onDiscard}/>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Modal;