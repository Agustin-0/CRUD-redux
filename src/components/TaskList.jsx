import React from 'react'
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const TaskList = () => {
    //hook para seleccionar el estado del store - El estado de tareas!
    const tasks = useSelector((state) => state.tasks)

    //Renderizado condicional
    //empty-state
    if(tasks.length === 0){
        return <p className='no-tasks-message'>No hay tareas pendientes, !Añada una nueva!</p>
    }

    return (
        <ul className='task-list'>
            {tasks.map( task => (
                <TaskItem
                key={task.id}
                task={task}
// estas dos props onDeleteTask={onDeleteTask} y onToggleComplete={onToggleComplete}
// se sacan para
                />
            ))}
        </ul>
    )
};

export default TaskList;