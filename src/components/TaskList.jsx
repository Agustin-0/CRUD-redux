import React from 'react'
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';


const TaskList = ({tasks, onToggleComplete, onDeleteTask}) => {

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
                onDeleteTask={onDeleteTask}
                onToggleComplete={onToggleComplete}
                />
            ))}
        </ul>
    )
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
};

export default TaskList;