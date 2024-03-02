
import { Data } from '../../Const/Data'
import { Button } from '../Buttons/Button'


export function Task () {
  return (
    <div className='BigContainerCardType1'>
      {Data.map(({  id, Task,subTask }) => {
        return (
            <section key={id}>
          <div className='ContainerCardType1'>
            <input type='checkbox' id="check">
            </input>
            <h2>{Task}</h2>
            <p>{subTask}</p>
            <Button Title="Delete"/>
          </div>
          </section>
        )
      })}
    </div>
  )
}