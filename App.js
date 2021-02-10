import './App.css';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App =()=> {
const [showAddTask,setShowAddTask] = useState(false) ;  
const [tasks,setTasks] = useState([
  {id:1,text:'attand at school', day:'feb 15 at 9:00 am', reminder:true},
  {id:2,text:'meeting in office', day:'feb 16 at 1:00 pm', reminder:false},
  {id:3,text:'going for shopping', day:'feb 17 at 3:00 pm', reminder:true},
  {id:4,text:'GP appointment at ferny grove', day:'feb 18 at 10:00 am', reminder:true},
]);

// Delete task
const deleteTask =(id)=>{
  setTasks(tasks.filter(task => task.id !== id));
}

//toggle remainder
const toggleRemainder = (id) =>{
  setTasks(
    tasks.map(task => task.id === id ? 
      {...task,reminder:!task.reminder}:
      task));
  }

  // Add task
  const addTask = (task) =>{
    const newTask = {id:uuidv4(),...task};
    setTasks([...tasks,newTask]);
  }
  return (
    <div className = 'container'>
      {showAddTask && <AddTask addTask = {addTask}/>}
      <Header title='Task Tracker' add={()=>setShowAddTask(!showAddTask)} addShow={showAddTask}/>
      {tasks.length > 0 ?  
      (<Tasks tasks = {tasks} deleteTask = {deleteTask} onToggle={toggleRemainder}/>) : 
      ('No task to show')}
      
     
    </div>
  );
}

export default App;
