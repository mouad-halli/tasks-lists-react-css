import { useEffect, useState, Children } from 'react'
import { BsPlusLg, BsCheck } from 'react-icons/bs'
import { List } from './components/List'
import './App.css'
import { CreateList } from './components/CreateList'

function App() {

  const [lists, setLists] = useState([])
  const [createListActive, setCreateListActive] = useState(false)

  const handleAddList = (newList) => {
    setLists([...lists, newList])
  }

  const handleDisplayChange = () => {
    setCreateListActive(!createListActive)
  }

  return (
    <div className='root'>
      <div className='title'>
        <h4>Tasks</h4>
        <span>Lists</span>
      </div>
      <div className='add-list'>
        <BsPlusLg className='plus-icon' onClick={handleDisplayChange} />
        <span>Create list</span>
      </div>
      <div className='lists'>
        {Children.toArray(lists.map(listItem => (
          <List list={listItem} />
        )))}
      </div>
      {createListActive &&
        <CreateList
          handleAddList={handleAddList}
          changeDisplayOnComplete={handleDisplayChange}
        />}
    </div>
  )
}

export default App
