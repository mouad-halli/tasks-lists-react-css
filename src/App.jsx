import { useEffect, useState } from 'react'
import './App.css'
import { Clock } from './components/Clock'
import { TodoList } from './components/TodoList'

function App() {

  const [list, setList] = useState([])

  const removeTaskFromList = (taskIndex) => {
    const listCopy = [...list]
    listCopy.splice(taskIndex, 1)
    setList(listCopy)
  }

  const CreateTask = (e) => {
    e.preventDefault()
    const task = e.target[0].value
    if (!task)
      return
    e.target[0].value = ''
    const listCopy = [...list, task]
    setList(listCopy)
  }

  useEffect(() => {
    console.log("new task has been added")
  }, [list])

  return (
    <div className='root'>
      <div className='container'>
        <h1>TO-DO LIST</h1>
        <form className='todoList-input' onSubmit={CreateTask}>
          <input type='text' name='task' placeholder='Enter a new task' />
          <button type='submit' >Create</button>
        </form>
        <Clock />
        <TodoList list={list} deleteTask={removeTaskFromList}/>
      </div>
    </div>
  )
}

export default App
