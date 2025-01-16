// import React from 'react';
import { useState } from 'react';
import Button from './../utilities/Button';

const Application = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');
console.log(text)
    return (
        <section className="w-full h-screen my-10 ">
            <div className="w-7/12 mx-auto bg-gradient-to-r from-red-200 via-pink-200
             to-pink-100 backdrop-blur-2xl inset-10 border border-pink-100 
             rounded-md shadow-md py-2 bg-opacity-10">
                <div className="flex flex-row items-center w-8/12 mx-auto py-3 gap-2 space-x-3">
                    <input type="text" name="add-text" id="add-input"
                     className="bg-gradient-to-r from-slate-100/40
                      to-zinc-100/65 py-1 w-8/12 outline-0
                       rounded-md text-zinc-400/70
                        font-light capitalize px-4
                         caret-zinc-400/75 inset-8" value={text} 
                         onChange={(e) => {
                            e.target.value !== ''? setText(e.target.value) : setText('')
                        }} />
                    <Button btnName={`add task`} className={`bg-sky-600 text-pink-50 py-1`} />
                </div>
            </div>
        </section>
    );
};

export default Application;