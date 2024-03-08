
import { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [list, setList] = useState(null);

    const handleAdd = (value) => {
        let newItem = {
            id: uuidv4(),
            text: value,
            isCompleted: false
        }
        setList([
            ...list,
            newItem
        ]);
        fetch('http://localhost:4000/list', {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Task added");
        })
    }

    const handleDelete = (id) => {
        let filterData = list.filter(item => item.id !== id);
        setList(filterData);
        fetch(`http://localhost:4000/list/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Task Deleted");
        })
    }

    const handleUpdateItem = (event, id) => {
        let itemIndex = list.findIndex(item => item.id === id);
        let updatedItem = {...list[itemIndex], isCompleted: event.target.checked};
        let newList = [...list];
        newList[itemIndex] = updatedItem;
        setList(newList);
        fetch(`http://localhost:4000/list/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(`Item update with ${updatedItem.id}`);
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/list')
        .then(res => res.json())
        .then(data => {
            setList(data)
        })
    }, []);
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h1 className='text-center'>Todo List</h1>
                    <hr/>
                    <TodoForm handleAdd={handleAdd} />
                </div>
                <div className='col-md-6 offset-md-3'>
                    <TodoList list={list} handleDelete={handleDelete} handleUpdateItem={handleUpdateItem}/>
                </div>
            </div>
        </div>
    );
}

export default App;
