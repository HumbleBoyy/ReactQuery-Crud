import { getRequest } from "../service/getRequest"

const Home = () => {
  const {data:coursesList, isLoading}   = getRequest("courses", "/courses")
  console.log(coursesList)
  return (
    <div>
      Home
    </div>
  )
}

export default Home
