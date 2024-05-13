import {  Route, Routes } from "react-router-dom"
import { Home,Favorites} from "../Screen"



export const AppRouter = () => {
  return (

    <>
    {/* <Header /> */}
    <section>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Favorites" element={<Favorites/>}/>
    </Routes>
    </section>
    
    </>
  )
}