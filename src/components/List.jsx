import { Children } from 'react'
import { BsCheck } from 'react-icons/bs'

export const List = (props) => {

  const {list} = props

    return (
        <div style={{backgroundColor: list.color}} className='list'>
          <div className='list-name'>
            <h1>{list.listName}</h1>
          </div>
          <div className='tasks'>
            {Children.toArray(list.tasks.map(taskItem => (
              <div className='task'>
                <BsCheck className='check-icon' />
                <label>{taskItem}</label>
              </div>
            )))}
          </div>
        </div>
    )
}
