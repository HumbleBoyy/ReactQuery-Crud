import { AddCourses, Home } from '../pages'
import { Route, Routes } from 'react-router-dom'

const PagesRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<AddCourses/>}/>
    </Routes>
  )
}

export default PagesRoute
