import { CourseType } from "@/types/CourseType";
import CourseCard from "../components/CourseCard";
import { AddFormWrapper, HomeStyle } from "../Modules/style";
import { getRequest } from "../service/getRequest"
import {Loader} from '@gravity-ui/uikit';
import ModalUi from "../ui/ModalUi";
import { useContext } from "react";
import { Context } from "../context/context";
import InputUi from "../ui/InputUi";
import MButton from "../ui/MButton";
const Home = () => {
  const {data:coursesList = [], isLoading}   = getRequest("courses", "/courses")
  const {addModal, setAddModal} = useContext(Context)
  return (
    <>
      <HomeStyle>
        {isLoading ? <Loader/> : coursesList.map((item:CourseType)=> <CourseCard item={item} key={item.id}/>)}
      </HomeStyle>
      <ModalUi open={addModal} setOpen={setAddModal}>
         <AddFormWrapper>
            <InputUi name="courseName" view={"normal"} size={"xl"} placeholder="Enter Course Name"  type={"text"}/>
            <InputUi name="teacher" view={"normal"} size={"xl"} placeholder="Teacher Name"  type={"text"}/>
            <InputUi name="location" view={"normal"} size={"xl"} placeholder="Location"  type={"text"}/>
            <InputUi name="price" view={"normal"} size={"xl"} placeholder="Price"  type={"text"}/>
            <InputUi name="duration" view={"normal"} size={"xl"} placeholder="Kurs Davomiyligi"  type={"text"}/>
            <InputUi name="studyTime" view={"normal"} size={"xl"} placeholder="Kuniga Soati"  type={"text"}/>
            <MButton view={"action"} size={"xl"} type={"submit"} >Add</MButton>
         </AddFormWrapper>
      </ModalUi>
    </>
  )
}

export default Home
