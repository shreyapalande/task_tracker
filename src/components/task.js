import {FaTimes} from 'react-icons/fa'

export const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h4>{task.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer', float:'right'}} onClick={() => onDelete(task.id)}/> 
        </h4>
        <p>{task.day}</p>
    </div>
  )
}
