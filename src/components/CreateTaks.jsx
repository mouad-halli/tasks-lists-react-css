import { Children, useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'

export const CreateTasks = (props) => {

    const { tasksInput, listName, handleAddTaskInput, handleTaskInputChange, handleListNameInputChange } = props

    return (
        <div className='create-list-input-section'>
            <h1 className='create-list-title'>Tasks</h1>
            <input onChange={(e) => handleListNameInputChange(e)} type='text' value={listName} placeholder='List Name' />
            {Children.toArray(tasksInput.map((task, idx) => (
                <input onChange={(e) => handleTaskInputChange(e, idx)} type='text' value={task} placeholder='new task' />
            )))}
            {tasksInput.length < 4 &&
                <div className='add-list'>
                    <BsPlusLg className='plus-icon' onClick={handleAddTaskInput} />
                    <span>Add task</span>
                </div>
            }
        </div>
    )
}