import { useRef, useState } from 'react'
import { BsPlusLg, BsCheck } from 'react-icons/bs'
import { CreateTasks } from './CreateTaks'
import { CustomizeList } from './CustomizeList'

export const CreateList = (props) => {

  const { handleAddList, changeDisplayOnComplete } = props

  const [display, setDisplay] = useState('create-tasks-view')
  const [listName, setListName] = useState([''])
  const [tasksInput, setTasksInput] = useState([''])
  const [backgroundColor, setBackgroundColor] = useState(['#23395d'])
  const [color, setColor] = useState(['#FFFFFF'])

  const createTasksBubbleRef = useRef(null)
  const customizeBubbleRef = useRef(null)

  const handleAddTaskInput = () => {
    setTasksInput([...tasksInput, ''])
  }

  const handleListNameInputChange = (e) => {
    const newValue = e.target.value

    setListName(newValue)
  }

  const handleTaskInputChange = (e, taskIndex) => {
      const newValue = e.target.value

      const tasksInputCopy = [...tasksInput]
      tasksInputCopy[taskIndex] = newValue
      setTasksInput(tasksInputCopy)
  }

  const handleBackgroundColorChange = (e) => {
    const newValue = e.target.value

    setBackgroundColor(newValue)
  }

  const handleColorChange = (e) => {
    const newValue = e.target.value

    setColor(newValue)
  }

  const handleDisplayChange = (e) => {
    const actionName = e.target.name

    if (actionName === 'next' && display === 'create-tasks-view') {
      setDisplay('customize-view')
      customizeBubbleRef.current.style.backgroundColor = '#23395d'
      customizeBubbleRef.current.style.color = 'white'
      createTasksBubbleRef.current.style.backgroundColor = 'white'
      createTasksBubbleRef.current.style.color = '#23395d'
    }
    else if (actionName === 'next' && display === 'customize-view') {
      handleAddList({listName, backgroundColor, color, tasks: tasksInput})
      changeDisplayOnComplete()
    }
    else if (actionName === 'back' && display === 'customize-view') {
      setDisplay('create-tasks-view')
      createTasksBubbleRef.current.style.backgroundColor = '#23395d'
      createTasksBubbleRef.current.style.color = 'white'
      customizeBubbleRef.current.style.backgroundColor = 'white'
      customizeBubbleRef.current.style.color = '#23395d'
    }
    else if (actionName === 'back' && display === 'create-tasks-view') {
      changeDisplayOnComplete()
    }
  }

    return (
        <div className='create-list-container'>
          <div className='create-list'>
            <div className='create-list-bubbles'>
              <div ref={createTasksBubbleRef} className='bubble-1'>1</div>
              <div ref={customizeBubbleRef} className='bubble-2'>2</div>
            </div>
            {display === 'create-tasks-view' ?
              <CreateTasks
                tasksInput={tasksInput}
                listName={listName}
                handleAddTaskInput={handleAddTaskInput}
                handleTaskInputChange={handleTaskInputChange}
                handleListNameInputChange={handleListNameInputChange}
              />
            :
              <CustomizeList
                backgroundColor={backgroundColor}
                color={color}
                handleBackgroundColorChange={handleBackgroundColorChange}
                handleColorChange={handleColorChange}
                listName={listName}
                tasksInput={tasksInput}
              />
            }
            <div className='create-list-btn-section'>
              <button onClick={(e) => handleDisplayChange(e)} name='back' className='back-btn'>back</button>
              <button onClick={(e) => handleDisplayChange(e)} name='next' className='next-btn'>
                {display === 'customize-view' ? 'create' : 'next'}
              </button>
            </div>
          </div>
        </div>
    )
}