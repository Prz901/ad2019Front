import styled from 'styled-components'

export const HomeContent = styled.div`
  background:#00B0FF;
  width:100vw;
  height:100vh;
`

export const Content = styled.div`
  background:white;
  width:60%;
  height:80%;
  margin: 0 auto;
  
  border-radius:20px;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  h1 {
    font-size:40px;
    font-weight:400;
  }
  .content-body{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .content-button{
    border: 1px solid #00B0FF;
    padding:10px 10px;
    font-size:25px;
    cursor:pointer;
    transition:background-color 0.9s;
  }

  .content-button:hover{
    background:#00B0FF;
    color:white;
  }

  img {
      width:400px;
      padding:0 60px;
  }

`