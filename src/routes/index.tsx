import {Home } from '../pages'
import { Route, Routes } from 'react-router-dom'

const PagesRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default PagesRoute
