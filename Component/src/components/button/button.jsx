import './button.css'
export function Button(props){

    const {title,onClick} = props 
  
    const handleClick = () => onClick()
  
    return (

        <div className="container">
		<div className="btn">
             <button className="btn" onClick={handleClick}>
        <p>{title}</p>
      
    </button></div>
	</div>
    )
    
  }