import styled from 'styled-components'

export const StartContent = styled.div`
  background:#00B0FF;
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;

  .back-page{
    position:absolute;
    top:17%;
    left:12%;
    width:100px;
    height:25px;
    padding:10px 0px;
    border-radius:5px;
    background:white;
    color:black;
    transition:background-color 0.9s;
  }

  .back-page:hover{
    background:#00B0FF;
    color:white;
  }

  .start-title{
    text-align:center;
    font-size:40px;
    font-weight:200;
    background:white;
    border-radius:20px;
    padding:30px;
    width:60%;

    h2{
      padding-bottom:80px;
      line-height:40px;
      color:#00B0FF;
    }

   .start-form-content {
    display:flex;
    flex-direction:column;
    align-items:center;

    .start-title-form{
      font-size:40px;
      font-weight:300;
      line-height:40px;
    }

    .start-inputs{
      margin:40px 0;

      .start-input{
        border-bottom:2px solid  #00B0FF;
        margin:10px 16px;
      }


    }
    .start-input-buttom{
        background: #00B0FF;
        padding:10px 10px;
        color:white;
        border-radius:5px;
        font-size:20px;
        cursor:pointer;
        transition:color 0.9s
      }
      .start-input-buttom:hover{
        color:black;
      }
   }
  }
`

