import React, {useState} from 'react';
import { Button,  Form } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const AddTask = ()=>{
 const dispatch = useDispatch();
 const [newTask, setNewTask] = useState("");
 const addFunction = ()=>{
     if (newTask.trim()){
         dispatch({type:"add",payload:newTask})
         setNewTask(" ");
     }
 }
return (
        <Form > 
        <Form.Group>
          <Form.Label><b>  </b></Form.Label>
          <Form.Control type="text" className="input" value={newTask} placeholder="Add new todo" onChange={(e)=>setNewTask(e.target.value)} style={{'width':300}} />
        </Form.Group>
        <Button variant="primary mb-3" onClick={addFunction} style={{ }}  >
          Add 
        </Button>
        </Form>
        );
}
export default AddTask;
