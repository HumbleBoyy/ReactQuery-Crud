import { CourseType } from "@/types/CourseType";
import CourseCard from "../components/CourseCard";
import { HomeStyle } from "../Modules/style";
import { getRequest } from "../service/getRequest"
import {Loader} from '@gravity-ui/uikit';
import ModalUi from "../ui/ModalUi";
import { useContext } from "react";
import { Context } from "../context/context";
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
            
         </form>
      </ModalUi>
    </>
  )
}

export default Home
