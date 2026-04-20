import React, { useState } from 'react';
import './TaskForm.css';
import { addTask } from '../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

const TaskForm = () => {
  //estado de la tarea
  const [taskText, setTaskText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    //evitamos que se refresque al pagina por comportamiento nativo
     e.preventDefault()
     //revisammos que taskText no este vacio!
     if(taskText.trim()) {
      dispatch(addTask(taskText.trim()))
      //limpia el campo input del formulario
      setTaskText("")
     }
  }

  return (
    //el formulario adminitra los input por tanto es el que tiene el evento submmit y el button es el disparador nada más.
    <form onSubmit={handleSubmit} className='task-form'>
        <input value={taskText} onChange={e => setTaskText(e.target.value)} placeholder='Escriba su tarea' className='task-form-input' type="text" id='input-task'/>
        <button className='task-form-button' type='submit'> Añadir Tarea </button>
    </form>
  )
};


export default TaskForm