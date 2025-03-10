import { Context } from '../context/context';
import MButton from '../ui/MButton';
import { HeaderStyle } from './style';
import { useContext } from 'react';
const Header = () => {
  const {addModal, setAddModal, setIsEdit,  setName,  setPrice,  setDuration,  setStudyTime,  setLocation, setTeacher} = useContext(Context)

  const handleAddBtn = () => {
    setAddModal(!addModal)
       setName("")
       setPrice("")
       setDuration("")
       setStudyTime("")
       setLocation("")
       setTeacher("")
    setIsEdit("create")
  }
  return (
    <HeaderStyle>
      <h1 className='header_title'>StudyPro</h1>
      <MButton type='button' size={"xl"} view={"outlined-action"} onClick={() => handleAddBtn()}>Add</MButton>
    </HeaderStyle>
  )
}

export default Header
