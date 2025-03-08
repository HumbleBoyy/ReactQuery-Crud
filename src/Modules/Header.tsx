import MButton from '../ui/MButton';
import { HeaderStyle } from './style';
const Header = () => {
  return (
    <HeaderStyle>
      <h1 className='header_title'>StudyPro</h1>
      <MButton type='button' size={"xl"} view={"outlined-action"} onClick={(e:Event) => console.log(e.target)}>Add</MButton>
    </HeaderStyle>
  )
}

export default Header
