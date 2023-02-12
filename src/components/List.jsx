import { Children } from 'react'
import { BsCheck } from 'react-icons/bs'

export const List = (props) => {

  const { list } = props

    return (
        <div style={{backgroundColor: list.backgroundColor}} className='list'>
          <div className='list-name'>
            <h1>{list.listName}</h1>
          </div>
          <div className='tasks'>
            {Children.toArray(list.tasks.map(taskItem => (
              taskItem && <div className='task'>
                <BsCheck style={{color: list.backgroundColor}} className='check-icon' />
                <label style={{color: list.color}} >{taskItem}</label>
              </div>
            )))}
          </div>
        </div>
    )
}
