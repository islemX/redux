import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import UpdateTask from './UpdateTask';
import {useDispatch,useSelector} from 'react-redux';

const ListTask = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state=>state.reducer.tasks);
    const [taskState ,setTaskState] = useState("All");
    const finishedTask = (id) =>{
      dispatch({type: "finished",payload:id})
    }
   
 
    return (
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4" style={{color:"green"}}    >Todo App</h1>   
          {(taskState==="done"?tasks.filter(task=>task.isDone===true) : taskState==="undone" ?tasks.filter(task=>task.isDone===false) : tasks).map((task,i)=>  
          <div className="todo" key={i}>
          <span style={task.isDone ?{textDecoration: "line-through"} : {}} >{task.name}</span>
          <div className="button">
            <Button style={{margin:'5px'}} variant="outline-success" onClick={()=>finishedTask(task.id)} >✓</Button>
            <Button style={{margin:'5px'}} variant="outline-danger"  onClick={()=>dispatch({type:"delete",payload:task.id})}>✕</Button>
            <UpdateTask taskname={task.name} newid={task.id}/>         
          </div>       
          </div>       
           )}

        <Button style={{ margin: "5px" }} variant="outline-success" onClick={()=>setTaskState("done")} >
        finished
      </Button>
      <Button style={{ margin: "5px" }} variant="outline-success" onClick={()=>setTaskState("undone")}>
        Incompleted
      </Button>
      <Button style={{ margin: "5px" }} variant="outline-success" onClick={()=>setTaskState("All")} >
        Tasks
      </Button>    
        </div>      
      </div>
         );
}

export default ListTask;