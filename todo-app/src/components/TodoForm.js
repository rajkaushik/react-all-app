import { useState } from "react";

function TodoForm({handleAdd}) {
    const [inputVal, setInput] = useState('');
    const addItem = () => {
        handleAdd(inputVal);
        setInput('');
    }
  return (
    <>
        <div className="input-group mb-3">
            <input type="text" onChange={(e) => setInput(e.target.value)} className="form-control" value={inputVal} />
            <button onClick={addItem} className='btn btn-primary btn-sm'>Add</button>
        </div>
    </>
  );
}

export default TodoForm;