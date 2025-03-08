import { Context } from '../context/context';
import MButton from '../ui/MButton';
import { HeaderStyle } from './style';
import { useContext } from 'react';
const Header = () => {
  const {addModal, setAddModal} = useContext(Context)
  return (
    <HeaderStyle>
      <h1 className='header_title'>StudyPro</h1>
      <MButton type='button' size={"xl"} view={"outlined-action"} onClick={() => setAddModal(!addModal)}>Add</MButton>
    </HeaderStyle>
  )
}

export default Header
