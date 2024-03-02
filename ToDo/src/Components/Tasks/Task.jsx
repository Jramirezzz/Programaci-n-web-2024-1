
import { Data } from '../../Const/Data'
import { Button } from '../Buttons/Button'
 import './Task.css'

export function Task () {
  return (
    <div className='BigContainer'>
      {Data.map(({ id, Task}) => {
        return (
            <section key={id}>
          <div className='Container'>
            <input type='checkbox' id="check">
            </input>
            <h2 className='Title'>{Task}</h2>
            
            <Button Title="Delete"/>
          </div>
          </section>
        )
      })}
    </div>
  )
}