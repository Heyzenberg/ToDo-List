import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from "react";
function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if(value == '') {
            return
        }

        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                date: new Date(),
                status: true
            }]
        )
        setValue('')

        
    }

    useEffect(() => {
            localStorage.setItem("task", JSON.stringify(todo));
        }, [todo]);

    return(
        <div className='addTodo'>
            <input className='addTodo-input' placeholder='Enter your task' value={value} onChange={ (e) => setValue(e.target.value)}/>
            <button className='addTodo-btn' onClick={saveTodo}>+</button>
        </div>
    )
}


export default AddTodo