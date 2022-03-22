import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props){
    const[modal,setModal]=useState(false);
    function deletehandler(){
        setModal(true);
    }
    function closehandler(){
        setModal(false);
    }
    return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deletehandler}>Delete</button>
        </div>
        {modal&&<Modal onClick={closehandler}/>}
        {modal&&<Backdrop onClicked={closehandler}/>}
      </div>
    );
}

export default Todo;