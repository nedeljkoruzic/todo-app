import React from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import {useState} from 'react' ;

const Todo = (props) => {

  const  [ modalIsOpen, setModalIsOpen ] = useState (false);

  function deleteHandler () {
  setModalIsOpen(true);
  }
  function closeModalHandler () {
    setModalIsOpen(false);
  }
  return (
   <div>
       <div className="card">
      <h2>{props.abc}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal  onCancel ={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
   </div>
   );
};

export default Todo;
