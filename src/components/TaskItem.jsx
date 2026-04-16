import './TaskItem.css';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {

  return (
    <li className='task-item'>
        <input checked={task.completed} onChange={ () => onToggleComplete(task.id) } type="checkbox" className='task-item-checkbox' />
        <span className={`task-item-text ${ task.completed ? "completed" : "" } `} > {task.text} </span>
        <button onClick={ () => onDeleteTask(task.id)} className='task-item-delete-button'> Eliminar </button>
    </li>
  )
};

//aca tipamos las props del componente
TaskItem.proptypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired 
    }).isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}

export default TaskItem;