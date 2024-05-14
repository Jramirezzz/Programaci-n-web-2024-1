import './Form.css'
import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import debounce from 'just-debounce-it'

export function Form ({onSubmit}) {
    const [searchInput, setSearchInput] = useState('')
    
    const debounceit = useCallback(
      
      debounce ((e)=>{
        onSubmit(e)
      },500),
     [onSubmit]
    ) 

    const handlecliclk = (e) => {
        setSearchInput(e.target.value)
        debounceit(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(searchInput)
        
      

    }


  return (
    <form onSubmit={handleSearch}>
    <div className="wrapper">
      <div className="flip-card__front">
        <div className="title">
          <p>Gif Search App</p>
        </div>
        <input
          className="flip-card__input"
          name="submitl"
          value={searchInput}
          onChange={handlecliclk}
          placeholder="Search Your Gif"
          type="text" 
        />
        <button type="submit" className="flip-card__btn">
          Search
        </button>
      </div>
    </div>
  </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.string.isRequired
};