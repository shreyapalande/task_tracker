import React from 'react'
import { useState } from 'react'

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert("Please add task")
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <center>
            <form className='add-form' style={{maxWidth: '500px'}} onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Day and Time</label>
                    <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className='form-control form-control-checkbox'>
                    <label><input checked={reminder} type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>Set Reminder</label>
                </div> 
                <input type='submit' value='Save Task' className='btn btn-block'/>
            </form>
        </center>
    )
}
