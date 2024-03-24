import { Button } from '../Buttons/Button'
import './Task.css'

export function Task (props) {

  const { 
    titleTask,
    dateTask,
    done, 
    onToggle,
    onDelete
  } = props 

  const handleCheckboxChange = (e) => {
    onToggle();
  };

  const doneClassNameTask = done ? "task-complete" : "task-incomplete"

  return (
    <article className={doneClassNameTask}>
      <input
        type="checkbox" 
        checked={done} 
        onChange={handleCheckboxChange} 
      />
      <div className="info-task">
        <p className="task-title">{titleTask}</p>
        <p>Deadline: {dateTask}</p>
      </div>
      < Button title="Delete" 
              onClick={onDelete}
      />
    </article>     
    )
}