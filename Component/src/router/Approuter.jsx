import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Screen"



export const AppRouter = () => {
  return (

    <>
    {/* <Header /> */}
    <section>
    <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/aboutus" element={<Favorities/>}/> */}
    </Routes>
    </section>
    
    </>
  )
}