import { useState } from 'react';
import Button from './../utilities/Button';


const Application = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');

    const clickToAdd = (e) => {
        e.preventDefault();
        setData([...data, { id: new Date().getTime(), text: text, completed: false }]);
        setText('');
    };

    console.log(text);

    return (
        <section className="w-full h-screen my-10 ">
            <div className="w-7/12 mx-auto bg-gradient-to-r from-red-200 via-pink-200
             to-pink-100 backdrop-blur-2xl inset-10 border border-pink-100 
             rounded-md shadow-md py-2 bg-opacity-10">
                <div className="flex flex-row items-center w-8/12 mx-auto py-3 gap-2 space-x-3">
                    <input
                        type="text"
                        name="add-text"
                        id="add-input"
                        className="bg-gradient-to-r from-slate-100/40
                      to-zinc-100/65 py-1.5 w-8/12 outline-0
                       rounded-md text-zinc-400/70
                        font-light capitalize px-4
                         caret-zinc-400/75 inset-8"
                         placeholder='add your task here ...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}  // Simplified handler
                    />
                    <Button
                        disabled={!text.trim()}
                        btnName={`add task`}
                        className={`${!text.trim()?'bg-gray-400 cursor-not-allowed text-red-400':'bg-sky-600 text-pink-50'}`}
                        onAction={clickToAdd}  // Updated to onClick
                    />
                </div>
            </div>
            {data.length>0 && <div className='w-6/12  mx-auto my-5 bg-gradient-to-r from-red-200 via-pink-200
             to-pink-100 backdrop-blur-2xl inset-10 border border-pink-100 
             rounded-md shadow-md py-2 bg-opacity-10'>
                    <table className='w-full border'>
                        <thead>
                            <tr>
                                <td>SL.</td>
                                <td>ID No.</td>
                                <td>Task Description</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, index)=>(
                                <tr key={element.id}>
                                    <td>{index+1<10 ? `0${index+1}.`: `${index+1}.`}</td>
                                    <td>{element.id}</td>
                                    <td className='capitalize'>{element.text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div> 
            }
        </section>
    );
};

export default Application;

