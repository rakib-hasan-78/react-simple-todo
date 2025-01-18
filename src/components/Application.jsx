import { useState } from 'react';
import Button from './../utilities/Button';
import Modal from './Modal';


const Application = () => {

    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const [editData, setEditData] = useState(null);
    const [editText, setEditText] = useState('');
    const [modifyData, setModifyData] = useState([]);
    const [modalType, setModalType] = useState(null)
    
    // add to click button handler--->
    const clickToAdd = (e) => {
        e.preventDefault();
        setData([...data, { id: new Date().getTime(), text: text, completed: false }]);
        setText('');
    };
    // editing button handler ---->
    const clickToEdit = (element) => {
         if (editData!== null && editText!== '') {
            const editedData = data.map((value) => {
                if (value.id===element.id) {
                    return {...value, text: editText}
                }
                return value
            });

            setData(editedData);
            setEditData(null);
            setEditText('')
            
         }
    };

    // completing button handler --->

    const clickToComplete = (element) => {
         
        setModifyData([...modifyData, element.id]);
        const modifiedData = data.map(value=>{
            if (value.id===element.id) {
                return{...value, completed:true}
            }
            return value
        });
        setData(modifiedData);
        setModalType(null);
    };

    //  undo button handler --->

    const clickToUndo = (element)=>{
        setModifyData(modifyData.filter(id=>id!==element.id));
        const undoData = data.map(value=>{
            if(value.id===element.id){
                return {...value, completed:false}
            }
            return value;
        })
        setData(undoData);
        setModalType(null);

    }


    // remove button handler --->
    const clickToRemove = (element) => {
        const removeData = data.filter((value) =>(value.id !== element.id));
        setData(removeData);
        setModalType(null);
    };

    return (
        <section className="w-full h-screen my-10 ">
            <div className="xl:w-6/12 lg:w-7/12 md:w-7/12 sm:w-7/12 msm:w-11/12 xsm:w-11/12 mx-auto bg-gradient-to-r from-red-200 via-pink-200
             to-pink-100 backdrop-blur-2xl inset-10 border border-pink-100 
             rounded-md shadow-md py-2 bg-opacity-10">
                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col msm:flex-col xsm:flex-col items-center xl:w-8/12 lg:w-8/12 msm:w-11/12 xsm:w-11/12 mx-auto py-3 gap-2 space-x-3 md:space-x-0 sm:space-x-0 msm:space-x-0 xsm:space-x-0">
                    <input
                        type="text"
                        name="add-text"
                        id="add-input"
                        className="bg-gradient-to-r from-slate-100/40
                      to-zinc-100/65 py-1.5 w-8/12  md:w-11/12 sm:w-11/12 msm:w-11/12 xsm:w-11/12 outline-0
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
                        className={`${!text.trim()?'bg-gray-400 cursor-not-allowed text-red-400':'bg-sky-600 text-pink-50'} xl:w-4/12 lg:w-4/12 md:w-11/12 sm:w-11/12 msm:w-11/12 xsm:w-11/12`}
                        onAction={clickToAdd}  // Updated to onClick
                    />
                </div>
            </div>
            {data.length>0 && <div className='w-11/12 xl:w-6/12 lg:w-6/12  mx-auto my-5 bg-gradient-to-r from-red-200 via-pink-200
             to-pink-100 backdrop-blur-2xl inset-10 border border-pink-100 
             rounded-md shadow-md py-2 bg-opacity-10'>
                    <table className='w-full border'>
                        <thead>
                            <tr>
                                <td>SL.</td>
                                <td>ID No.</td>
                                <td>Task Description</td>
                                <td className='text-center'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, index)=>(
                                <tr key={element.id}>
                                    <td>{index+1<10 ? `0${index+1}.`: `${index+1}.`}</td>
                                    <td>{element.id}</td>
                                    <td className={`${element.completed?'line-through' : ''} capitalize`}>{element.text}</td>

                                    <td>  <Button  disabled={modifyData.find(id=> id===element.id)}  btnName={`edit`}
                                     className={`py-1 text-[9px] text-pink-50 font-extralight ${modifyData.includes(element.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-400'}`}

                                        onAction={()=>{setEditData(element); setEditText(element.text)}}
                                    /> {editData&&editData.id===element.id && ( <Modal className={`flex`} title={`edit present data`} task={editText} setTask={(e)=>setEditText(e.target.value)}
                                     doneAction={()=>clickToEdit(element)} 
                                     onDiscard={()=>setEditData(false)} /> )}</td>

                                    <td> <Button disabled={modifyData.find(id=>id===element.id)} btnName={`complete`} className={`text-[9px] font-extralight  text-pink-50 ${modifyData.includes(element.id)?'bg-stone-400':'bg-emerald-500'}`} onAction={()=>setModalType('complete')} /> {modalType==='complete'&&( <Modal className={`hidden`} title={`are you sure ?`} doneAction={()=>clickToComplete(element)} onDiscard={()=>setModalType(null)} /> )} </td>

                                    <td> <Button disabled={!element.completed}  btnName={`undo`}   className={`text-[.5625rem] text-pink-50 ${!element.completed ? 'bg-stone-400 cursor-not-allowed' :'bg-purple-500'}`} onAction={()=>setModalType('undo')}/>{modalType==='undo'&&( <Modal doneAction={()=>clickToUndo(element)} onDiscard={()=>setModalType(null)} className={'hidden'} title={`are you sure to UNDO ?`}/>  )}</td>

                                    <td > <Button onAction={() =>setModalType('remove')} btnName={`remove`} className={`bg-red-500   py-1 text-pink-50 font-extralight text-center text-[9px]`}/>{ modalType==='remove' && (<Modal title={`are you sure to remove data ?`} className={`hidden`} 
                                        doneAction={()=>clickToRemove(element)} onDiscard={()=>setModalType(null)}
                                    />) } </td>
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

