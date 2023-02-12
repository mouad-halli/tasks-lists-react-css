import { Children } from 'react'
import { BsCheck } from 'react-icons/bs'

export const CustomizeList = (props) => {

    const {
        backgroundColor, color, handleBackgroundColorChange,
        handleColorChange, listName, tasksInput
    } = props

    return (
        <div className='create-list-customize-section'>
            <h1 className='create-list-title'>Customize</h1>
            <div style={{backgroundColor: backgroundColor, color: color}} className='list-template'>
              <div className='template-list-name'>
                <h1>{listName}</h1>
              </div>
              <div className='template-tasks'>
                {Children.toArray(tasksInput.map(task => (
                  task && <div className='template-task'>
                    <BsCheck style={{color: backgroundColor}} className='template-check-icon' />
                    <label style={{color: color}} >{task}</label>
                  </div>
                )))}
              </div>
            </div>
            <div className='create-list-colors'>
              <input onChange={(e) => handleColorChange(e)} type='color' value={color} />
              <label>Font color</label>
            </div>
            <div className='create-list-colors'>
              <input onChange={(e) => handleBackgroundColorChange(e)} type='color' value={backgroundColor} />
              <label>Background color</label>
            </div>
        </div>
    )
}