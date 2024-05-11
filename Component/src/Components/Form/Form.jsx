import { fetchGif } from '../Service/fetchGif';
import './Form.css'
import { useState } from 'react'

export function Form ({onSubmit}) {
    const [searchInput, setSearchInput] = useState('')
    

    const handlecliclk = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(searchInput)
        console.log(searchInput)
        setSearchInput(" ")

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