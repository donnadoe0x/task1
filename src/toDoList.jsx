import React, {useState} from 'react'


function ToDoList() {
  
    const [tasks, settasks] = useState([]);
    const [newTask, setNewTask] = useState ("");
    const [complete, setcomplete] = useState(false);

    function handleChange(event){
      setNewTask(event.target.value);

    }
    function addTask(){
      settasks(t => [...t, newTask]);
      setNewTask("");


    }
    function deleteTask(index){
      const updated = tasks.filter((elemnt, i) => i !== index);
      settasks(updated);

    }
    function editTask(index){
      const updatedTask = prompt("Edit the task:", tasks[index]);
      if (updatedTask !== null && updatedTask.trim() !== "") {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? updatedTask : task
        );
        settasks(updatedTasks);
      }
    }

    return ( 
  <div className="to-do-list">
   
    <h1>To-Do-List</h1>
    <div>
        <input 
          type="text"
          placeholder="Add a task..."
          value = {newTask}
          onChange={handleChange} />
          <button 
            className ="add-button"
            onClick = {addTask}>
            Add
          </button>
    </div>
    <ol>
        {tasks.map((task, index)=>
        <li key={index}>
          <span className= "text">{task}</span>
          <input
          type="checkbox"
          style ={StyleSheet.checkbox}
          onChange={()=> setcomplete (!complete)}
          checked ={complete}></input>
          <button className="delete-button"
          onClick={() => deleteTask(index)}>
            🗑️
          </button>
          <button className="edit-button"
          onClick={() => editTask(index)}>
           🖊️
          </button>


        </li>)}
    </ol>
  </div> );
}
export default ToDoList