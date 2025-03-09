import { CourseType } from "@/types/CourseType";
import CourseCard from "../components/CourseCard";
import { AddFormWrapper, HomeStyle } from "../Modules/style";
import { getRequest } from "../service/getRequest"
import {Loader} from '@gravity-ui/uikit';
import ModalUi from "../ui/ModalUi";
import { useContext, useState } from "react";
import { Context } from "../context/context";
import InputUi from "../ui/InputUi";
import MButton from "../ui/MButton";
const Home = () => {
  const {data:coursesList = [], isLoading}   = getRequest("courses", "/courses")
  const {addModal, setAddModal} = useContext(Context)

  const [name, setName] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [duration, setDuration] = useState<string>("")
  const [studyTime, setStudyTime] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [teacher, setTeacher] = useState<string>("")
  return (
    <>
      <HomeStyle>
        {isLoading ? <Loader/> : coursesList.map((item:CourseType)=> <CourseCard item={item} key={item.id}/>)}
      </HomeStyle>
      <ModalUi open={addModal} setOpen={setAddModal}>
         <AddFormWrapper>
            <InputUi value={name} onChange={(e) => setName(e.target.value)} name="courseName" view={"normal"} size={"xl"} placeholder="Enter Course Name"  type={"text"}/>
            <InputUi value={teacher} onChange={(e) => setTeacher(e.target.value)} name="teacher" view={"normal"} size={"xl"} placeholder="Teacher Name"  type={"text"}/>
            <InputUi value={location} onChange={(e) => setLocation(e.target.value)} name="location" view={"normal"} size={"xl"} placeholder="Location"  type={"text"}/>
            <InputUi value={price} onChange={(e) => setPrice(e.target.value)} name="price" view={"normal"} size={"xl"} placeholder="Price"  type={"text"}/>
            <InputUi value={duration} onChange={(e) => setDuration(e.target.value)} name="duration" view={"normal"} size={"xl"} placeholder="Kurs Davomiyligi"  type={"text"}/>
            <InputUi value={studyTime} onChange={(e) => setStudyTime(e.target.value)} name="studyTime" view={"normal"} size={"xl"} placeholder="Kuniga Soati"  type={"text"}/>
            <MButton view={"action"} size={"xl"} type={"submit"} >Add</MButton>
         </AddFormWrapper>
      </ModalUi>
    </>
  )
}

export default Home
