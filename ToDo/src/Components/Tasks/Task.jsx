
import { Data } from '../../Const/Data'
import { Button } from '../Buttons/Button'
import './Task.css'

export function Task (props) {
  const {titleTask} = props 
  return (
    <div className='BigContainer'>
      
            <h2>{titleTask}</h2>
          
            <Button Title="Delete"/>
          </div>
         
        )
}
