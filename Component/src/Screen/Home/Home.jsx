import { useState } from 'react'
import {Card, Form} from '../../Components/index'
export const Home =()  => {
  const [ searchTerm, setSearchTerm]= useState('');

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
    <Form onSubmit={handleSearch}/> 
    <Card searchInput={searchTerm}/>       
    </>
  )
}


