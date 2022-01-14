import React, {useState} from 'react'
import Header from './components/Header/Header' 
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import style from './App.css'

function App() {

  const [todo, setTodo] = useState(() => {
    
    const saved = localStorage.getItem("task");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;