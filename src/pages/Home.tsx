import { CourseCreateType, CourseItemType } from "@/types/CourseType";
import CourseCard from "../components/CourseCard";
import { AddFormWrapper, HomeStyle } from "../Modules/style";
import { getRequest } from "../service/getRequest"
import {Loader} from '@gravity-ui/uikit';
import ModalUi from "../ui/ModalUi";
import { FormEvent, useContext, useState } from "react";
import { Context } from "../context/context";
import InputUi from "../ui/InputUi";
import MButton from "../ui/MButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "../hooks/instance";
const Home = () => {
  const {data:coursesList = [], isLoading}   = getRequest("courses", "/courses")
  const {addModal, setAddModal, isEdit, setIsEdit, name, setName, price, setPrice, duration, setDuration, studyTime, setStudyTime, location, setLocation, teacher, setTeacher} = useContext(Context)
  const [editId, setEditId] = useState<string | undefined>("")
  const queryClient = useQueryClient()

  const createCourseMutation = useMutation({
     mutationFn:(data:CourseCreateType)=> instance().post("/courses", data),
     onSuccess:() => {
       setAddModal(false)
       queryClient.invalidateQueries({queryKey:['courses']})
     }
  }) 
  const updateCourseMutation = useMutation({
    mutationFn:(data:CourseCreateType) => instance().put(`/courses/${data.id}`, data),
    onSuccess:()=> {
       setAddModal(false)
       queryClient.invalidateQueries({queryKey:['courses']})
       setName("")
       setPrice("")
       setDuration("")
       setStudyTime("")
       setLocation("")
       setTeacher("")
    }
  })

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     const data:CourseCreateType = {
        name,
        price,
        duration,
        studyTime,
        location,
        teacher
     }

     if(isEdit === "create"){
      createCourseMutation.mutate(data)
     }else{
       data.id = editId
       updateCourseMutation.mutate(data)
     }
     
  }

  const editBtnClick = (obj:CourseCreateType) => {
    setIsEdit("update")
    setEditId(obj.id)
    setAddModal(true)
    setName(obj.name)
    setPrice(obj.price)
    setDuration(obj.duration)
    setStudyTime(obj.studyTime)
    setLocation(obj.location)
    setTeacher(obj.teacher)
  }
  return (
    <>
      <HomeStyle>
        {isLoading ? <Loader/> : coursesList.map((item:CourseCreateType)=> <CourseCard handleEdit={editBtnClick} item={item} key={item.id}/>)}
      </HomeStyle>
      <ModalUi open={addModal} setOpen={setAddModal}>
         <AddFormWrapper onSubmit={handleSubmit}>
            <InputUi value={name} onChange={(e) => setName(e.target.value)} name="courseName" view={"normal"} size={"xl"} placeholder="Enter Course Name"  type={"text"}/>
            <InputUi value={teacher} onChange={(e) => setTeacher(e.target.value)} name="teacher" view={"normal"} size={"xl"} placeholder="Teacher Name"  type={"text"}/>
            <InputUi value={location} onChange={(e) => setLocation(e.target.value)} name="location" view={"normal"} size={"xl"} placeholder="Location"  type={"text"}/>
            <InputUi value={price} onChange={(e) => setPrice(e.target.value)} name="price" view={"normal"} size={"xl"} placeholder="Price"  type={"text"}/>
            <InputUi value={duration} onChange={(e) => setDuration(e.target.value)} name="duration" view={"normal"} size={"xl"} placeholder="Kurs Davomiyligi"  type={"number"}/>
            <InputUi value={studyTime} onChange={(e) => setStudyTime(e.target.value)} name="studyTime" view={"normal"} size={"xl"} placeholder="Dars Soati"  type={"number"}/>
            <MButton view={"action"} size={"xl"} type={"submit"} >{isEdit === "create" ? "Create" : "Edit"}</MButton>
         </AddFormWrapper>
      </ModalUi>
    </>
  )
}

export default Home
