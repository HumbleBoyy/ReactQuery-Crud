import { CourseType } from "@/types/CourseType";
import CourseCard from "../components/CourseCard";
import { HomeStyle } from "../Modules/style";
import { getRequest } from "../service/getRequest"
import {Loader} from '@gravity-ui/uikit';
import ModalUi from "../ui/ModalUi";
import { useContext } from "react";
import { Context } from "../context/context";
import InputUi from "../ui/InputUi";
const Home = () => {
  const {data:coursesList = [], isLoading}   = getRequest("courses", "/courses")
  const {addModal, setAddModal} = useContext(Context)
  return (
    <>
      <HomeStyle>
        {isLoading ? <Loader/> : coursesList.map((item:CourseType)=> <CourseCard item={item} key={item.id}/>)}
      </HomeStyle>
      <ModalUi open={addModal} setOpen={setAddModal}>
         <form>
            <InputUi view={"normal"} size={"xl"} placeholder="Enter Course Name" name="courseName" type={"text"}/>
         </form>
      </ModalUi>
    </>
  )
}

export default Home
