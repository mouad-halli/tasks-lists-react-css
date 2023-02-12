import { useEffect, useState, Children } from 'react'
import { BsPlusLg, BsCheck } from 'react-icons/bs'
import { List } from './components/List'
import './App.css'

function App() {

  const initialTestingState = [
    {
      listName: 'First List',
      color: '#23395d',
      tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
    },
    {
      listName: 'Second List',
      color: '#23395d',
      tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
    },
    {
      listName: 'Third List',
      color: '#23395d',
      tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
    },
    {
      listName: 'Fourth List',
      color: '#23395d',
      tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
    }
  ]

  const [lists, setLists] = useState(initialTestingState)

  return (
    <div className='root'>
      <div className='title'>
        <h4>Tasks</h4>
        <span>Lists</span>
      </div>
      <div className='add-list'>
        <BsPlusLg className='plus-icon' />
        <span>Create list</span>
      </div>
      <div className='lists'>
        {Children.toArray(lists.map(listItem => (
          <List list={listItem} />
        )))}
      </div>
    </div>
  )
}

export default App
