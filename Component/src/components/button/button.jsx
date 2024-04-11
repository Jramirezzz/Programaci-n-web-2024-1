import './button.css'
export function Button(props){

    const {title,onClick} = props 
  
    const handleClick = () => onClick()
  
    return (
    <button className="btn" onClick={handleClick}>
        <p>{title}</p>
      
    </button>)
  }