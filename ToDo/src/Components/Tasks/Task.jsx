import { Button } from '../Buttons/Button'
import './Task.css'

export function Task (props) {

  const { 
     titleTask,
     done, 
     onToggle,
     onDelete 
    } = props 

  const handleCheckboxChange = () => {
    onToggle();
  };


  return (
    <article className='task'>
      <input
        type="checkbox" 
        checked={done} 
        onChange={handleCheckboxChange} 
      />
      <h2>{titleTask}</h2>
      < Button title="Delete" 
              onClick={onDelete}/>
    </article>     
    )
}