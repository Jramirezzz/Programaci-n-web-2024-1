import { useState } from 'react'
import {Card, Form, NavigationBar} from '../../Components/index'
export const Home =()  => {
  const [ searchTerm, setSearchTerm]= useState('');

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
    <div className='home'>
    <NavigationBar/>
    <Form onSubmit={handleSearch}/> 
    <Card searchInput={searchTerm}/>   
    </div>   
    </>
  )
}


