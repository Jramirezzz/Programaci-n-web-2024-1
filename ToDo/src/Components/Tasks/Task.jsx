
import { Data } from '../../Const/Data'
import './CardType1.css'

export function CardType1 () {
  return (
    <div className='BigContainerCardType1'>
      {Data.map(({  id, Task,subTask }) => {
        return (
            <section key={id}>
          <div className='ContainerCardType1'>
            <h2>{Task}</h2>
            <p>{subTask}</p>
          </div>
          </section>
        )
      })}
    </div>
  )
}