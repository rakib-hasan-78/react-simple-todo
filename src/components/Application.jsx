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
<section className="w-full h-screen my-10 px-4">
  <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-200 via-pink-200 to-pink-100 backdrop-blur-2xl border border-pink-100 rounded-md shadow-md py-4">
    <div className="flex flex-wrap items-center gap-3 px-4">
      <input
        type="text"
        name="add-text"
        id="add-input"
        className="bg-gradient-to-r from-slate-100/40 to-zinc-100/65 py-2 px-4 w-full md:w-8/12 rounded-md text-zinc-400/70 font-light capitalize caret-zinc-400/75 outline-none"
        placeholder="Add your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        disabled={!text.trim()}
        btnName="Add Task"
        className={`${!text.trim() ? 'bg-gray-400 cursor-not-allowed text-red-400' : 'bg-sky-600 text-pink-50'} w-full md:w-auto px-4 py-2 rounded`}
        onAction={clickToAdd}
      />
    </div>
  </div>

  {data.length > 0 && (
    <div className="max-w-4xl mx-auto my-5 bg-gradient-to-r from-red-200 via-pink-200 to-pink-100 backdrop-blur-2xl border border-pink-100 rounded-md shadow-md py-4 px-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-sm text-left px-2">SL.</th>
            <th className="text-sm text-center px-2">ID No.</th>
            <th className="text-sm text-left px-2">Task Description</th>
            <th className="text-sm text-center px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={element.id}>
              <td className="text-sm px-2">{index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}</td>
              <td className="text-sm px-2 bg-yellow-200">{element.id}</td>
              <td className={`${element.completed ? 'line-through' : ''} capitalize text-sm px-2`}>{element.text}</td>
              <td className="flex gap-2 px-2">
                <Button
                  disabled={modifyData.find((id) => id === element.id)}
                  btnName="Edit"
                  className={`${modifyData.includes(element.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-400'} text-xs py-1 px-2 rounded text-pink-50`}
                  onAction={() => {
                    setEditData(element);
                    setEditText(element.text);
                  }}
                />
                {editData && editData.id === element.id && (
                  <Modal
                    className="flex"
                    title="Edit Task"
                    task={editText}
                    setTask={(e) => setEditText(e.target.value)}
                    doneAction={() => clickToEdit(element)}
                    onDiscard={() => setEditData(null)}
                  />
                )}
                <Button
                  disabled={modifyData.find((id) => id === element.id)}
                  btnName="Complete"
                  className={`${modifyData.includes(element.id) ? 'bg-stone-400' : 'bg-emerald-500'} text-xs py-1 px-2 rounded text-pink-50`}
                  onAction={() => setModalType('complete')}
                />
                {modalType === 'complete' && (
                  <Modal
                    className="hidden"
                    title="Are you sure?"
                    doneAction={() => clickToComplete(element)}
                    onDiscard={() => setModalType(null)}
                  />
                )}
                <Button
                  disabled={!element.completed}
                  btnName="Undo"
                  className={`${!element.completed ? 'bg-stone-400 cursor-not-allowed' : 'bg-purple-500'} text-xs py-1 px-2 rounded text-pink-50`}
                  onAction={() => setModalType('undo')}
                />
                {modalType === 'undo' && (
                  <Modal
                    doneAction={() => clickToUndo(element)}
                    onDiscard={() => setModalType(null)}
                    className="hidden"
                    title="Are you sure to Undo?"
                  />
                )}
                <Button
                  btnName="Remove"
                  className="bg-red-500 text-xs py-1 px-2 rounded text-pink-50"
                  onAction={() => setModalType('remove')}
                />
                {modalType === 'remove' && (
                  <Modal
                    title="Are you sure to remove this task?"
                    className="hidden"
                    doneAction={() => clickToRemove(element)}
                    onDiscard={() => setModalType(null)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>

    );
};

export default Application;

