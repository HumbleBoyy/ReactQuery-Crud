import {styled} from "styled-components"
export const CourseCardi = styled.div`
    display: flex;
    flex-direction: column;
    height: 380px;
    width: 450px;
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
    .card_div_btn{
        font-size: 20px;
        color: white;
        font-weight: 600;
    }

    .cousrse_card_btn{
    display: flex;
    align-items: center;
    gap: 10px;
  }
    .btn_class{
    display: flex;
    align-items: center;
    justify-items: space-between;
    text-align: center;
    font-size: 20px;
    width: 100%;
  }
`