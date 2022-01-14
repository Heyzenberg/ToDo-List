import React, {useState} from 'react'

function TodoList({todo, setTodo}){

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {

        let newTodo = [...todo].filter( item => item.id != id )
        setTodo(newTodo)
    }

    function statusTodo(id) {

        let newTodo = [...todo].filter( item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    function fullDay(num){
        if(num < 10){
            return "0"+num;
        }
        return num;
    }

    const doneStyle = {textDecoration: 'line-through'}

    return (
        <div className='todoList'>
            {
                todo.map( item => {
                    let date = new Date(item.date);
                    let day = date.getDate();
                    let month = date.getMonth()+1;
                    let year = String(date.getFullYear()).slice(2);
                    let hours = date.getHours();
                    let minutes = date.getMinutes();
                    let seconds = date.getSeconds();

                    return(
                    
                        <div className='noteSpase' key={ item.id }>


                        {
                            edit == item.id ?
                                <div>
                                    <input onChange={ (e) => setValue(e.target.value)} value={value} />
                                    
                                </div> :
                                <div style={ !item.status ? doneStyle : {} }>
                                    <div className='nowDate' key={item.date}>
                                        {fullDay(day)}/{fullDay(month)}/{year} <br/>
                                        {fullDay(hours)}:{fullDay(minutes)}:{fullDay(seconds)}
                                    </div>
                                    { item.title } 
                                </div>
                        }

                        {
                            edit == item.id ?
                                <div>
                                    <button className='button' onClick={ () => saveTodo(item.id)}>&#128190;</button>
                                </div> :
                                <div>
                                    <button className='button' onClick={ () => statusTodo(item.id) }>&#10004;</button>
                                    <button className='button' onClick={ () => editTodo(item.id, item.title)}>&#128396;</button>
                                    <button className='button' onClick={ () => deleteTodo(item.id) }>&#10006;</button>
                                </div>
                        }
                        
                        </div>
                        )
                }  )
            }
        </div>
    )
}

export default TodoList