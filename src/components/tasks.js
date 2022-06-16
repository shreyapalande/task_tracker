import { Task } from "./task"

export const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div>{tasks.map((task) => ( <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> ))}</div>
    )
}
