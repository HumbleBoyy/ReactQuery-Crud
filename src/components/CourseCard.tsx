import { CourseCardi } from '../Modules/style'
import { CourseCreateType } from '../types/CourseType'
import MButton from '../ui/MButton'
import _React, { FC } from 'react'

const CourseCard:FC<{item:CourseCreateType}> = ({item}) => {
  return (
    <CourseCardi>
       <h2 className='card_title'>{item.name}</h2>
       <div className='card_div'>
         <h3 className='card_div_h3'>Ustoz: <span>{item.teacher}</span></h3>
         <h3 className='card_div_h3'>Davomiyligi: <span>{item.duration}</span> Oy</h3>
         <h3 className='card_div_h3'>Kuniga: <span>{item.studyTime}</span> Soat</h3>
         <h3 className='card_div_h3'>Manzil: <span>{item.location}</span></h3>
         <MButton type='button' size={"xl"} view={"action"} extraClass='card_div_btn'>{item.price} So'm</MButton>
       </div>
    </CourseCardi>
  )
}

export default CourseCard
