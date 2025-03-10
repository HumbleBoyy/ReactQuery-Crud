
import { CourseCreateType, CourseItemType } from '../types/CourseType'
import { CiEdit } from "react-icons/ci";
import MButton from '../ui/MButton'
import _React, { FC } from 'react'
import { MdDelete } from "react-icons/md";
import { CourseCardi } from './style';

const CourseCard:FC<{item:CourseCreateType, handleEdit:(obj:CourseCreateType) => void, handleDelete:(id:string | undefined) => void} > = ({item, handleEdit, handleDelete}) => {
  return (
    <CourseCardi>
       <h2 className='card_title'>{item.name}</h2>
       <div className='card_div'>
         <h3 className='card_div_h3'>Ustoz: <span>{item.teacher}</span></h3>
         <h3 className='card_div_h3'>Davomiyligi: <span>{item.duration}</span> Oy</h3>
         <h3 className='card_div_h3'>Kuniga: <span>{item.studyTime}</span> Soat</h3>
         <h3 className='card_div_h3'>Manzil: <span>{item.location}</span></h3>
         <h3 className='card_div_h3'>Kurs Narxi: <MButton type='button' size={"xl"} view={"raised"} extraClass='card_div_btn'>{item.price} So'm</MButton></h3>
         <div className='cousrse_card_btn'>
            <MButton onClick={()=> handleEdit(item)} type={"button"} size={"xl"} extraClass={"btn_class"} view={"outlined"}><CiEdit /><span>Edit</span></MButton>
            <MButton onClick={()=> handleDelete(item.id)} type={"button"} size={"xl"} extraClass={"btn_class"} view={"outlined-danger"}><MdDelete/>Delete</MButton>
         </div>
       </div>
    </CourseCardi>
  )
}

export default CourseCard
