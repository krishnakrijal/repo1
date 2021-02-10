
import Task from './Task';

const Tasks = ({tasks,deleteTask,onToggle})=>{
    
    return(
        <>{tasks.map((task) => <Task key = {task.id} task = {task} onDelete = {deleteTask} onToggle={onToggle}/>)}</>
    );
}

export default Tasks;