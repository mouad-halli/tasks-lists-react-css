import { Children, useEffect, useRef, useState } from "react"
import { BsCheckLg } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

export const TodoList = (props) => {

    const { list, deleteTask } = props

    const taskRef = useRef(null)

    const markTaskComplete = () => {
        taskRef.current.style.textDecorationLine = 'line-through'
    }

    return (
        <div className='todoList'>
        {Children.toArray(list.map((task, taskIndex) => (
            <div className='task'>
                <span ref={taskRef}>{task}</span>
                <div className='task-actions'>
                  <BsCheckLg className='check-mark'  onClick={markTaskComplete}/>
                  <AiFillDelete className='delete-mark'  onClick={() => deleteTask(taskIndex)}/>
                </div>
            </div>
        )))}
        </div>
    )
}