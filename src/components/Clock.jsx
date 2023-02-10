import { useEffect, useState } from 'react'

export const Clock = () => {

    const [date, setDate] = useState(new Date());

    function refreshClock() {
      setDate(new Date())
    }
  
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000)
      return () => {
        clearInterval(timerId)
      }
    }, [])

    return (
        <span style={{fontWeight: "bold"}} >{date.toLocaleTimeString()}</span>
    )

}