import {styled} from "styled-components"

export const AppClass = styled.div`
  ::-webkit-scrollbar{
    display: none;
    width: 0px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
export const HeaderStyle = styled.header`
   display:flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 2px solid white;

   .header_title{
       color: gold;
       font-weight: 700;
       font-size: 30px;
}
`
export const HomeStyle = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  gap: 10px;
  margin-top: 20px;


  .cousrse_card_btn{
    display: flex;
    align-items: center;
    gap: 10px;
  }

`


export const AddFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 20px;
`