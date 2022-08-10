import React , {useState}from 'react';
import { Button , Modal,Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const UpdateTask = ({taskname,newid})=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [update, setUpdate] = useState(taskname);
    const updateTask = ()=>{
        dispatch({type: "update",payload:{newname:update,id:newid}})  
        handleClose();
    }
    return (
      <>
        <Button variant="outline-success" onClick={handleShow}>
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change</Modal.Title>
          </Modal.Header>
          <Modal.Body><Form.Control type="text" className="input" value={update} placeholder="change todo" onChange={(e)=>setUpdate(e.target.value)} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateTask}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal> 
      </>
    );
  }
  export default UpdateTask;