import {styled} from "styled-components"
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
  justify-content: center;
  flex: wrap;
  height: 100vh;
  overflow: hidden;
  gap: 10px;
  margin-top: 20px;
`
export const CourseCardi = styled.div`
    display: flex;
    flex-direction: column;
    height: 325px;
    width: 400px;
    border: 2px solid gold;
    border-radius: 20px;

    .card_title{
        text-align: center;
        border-bottom: 2px solid gold;
        font-size: 30px;
        line-height: 20px;
        font-weight: 800;
        padding-bottom: 10px;
    }
    .card_div{
        padding: 5px;
    }
    .card_div_h3{
        font-size: 20px;
    }
`