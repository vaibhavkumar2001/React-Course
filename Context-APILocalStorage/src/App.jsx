import { TodoProvider } from './contexts'
import './App.css'
import React, { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'


function App() {
  const [ todos,setTodos ] = React.useState([])

  const addTodo = (todo) => {
    //Yaha maine spread operator nhi use krta toh agr main directly todo daal deta toh mera saara todo overwright hojaata
    //isilye maine spread operator use kiya h jisse mera saara todo aajayega 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
    //is mein maine object ki tarah kyon pass kiya h isliye pass kiya h kuonki maine context mein object ki tarah hi rakha h data ko 
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
