import { CourseType } from "@/types/CourseType";
import CourseCard from "../components/CourseCard";
import { HomeStyle } from "../Modules/style";
import { getRequest } from "../service/getRequest"
import {Loader} from '@gravity-ui/uikit';
const Home = () => {
  const {data:coursesList = [], isLoading}   = getRequest("courses", "/courses")
  console.log(coursesList)
  return (
    <HomeStyle>
      {isLoading ? <Loader/> : coursesList.map((item:CourseType)=> <CourseCard item={item} key={item.id}/>)}
    </HomeStyle>
  )
}

export default Home
