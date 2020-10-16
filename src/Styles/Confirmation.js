import styled from 'styled-components'

export const ConfirmationPage = styled.div`
  width:100vw;
  height:100vh;
  background:#00B0FF;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ContentConfirmation = styled.div`
  width: 80%;
  height:80%;
  background:white;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`

export const Content = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:100%;

  .title-confirmation {
    font-size:35px;
    margin-bottom:40px;
    color:gray;
  }

  .content-adjust {
    display:flex;
    flex-direction:row;
    align-items:center;
    /* margin-bottom: 140px; */
  }

  .confirmation-data {
    margin-bottom:10px;
    padding:10px;
    color:gray;
  }

  .button-confirmation {
    background:#45C934;
    padding:10px 10px;
    color:white;
    border-radius:5px;
    cursor:pointer;
    transition:color 0.9s;
  }
  .button-confirmation:hover {
    color:black;
  }
  .update-button{
    padding-bottom:40px;

    .button-edit{
      background:#00B0FF;
      color:white;
      padding:10px 10px;
      margin:0 10px;
      border-radius:5px;
      cursor:pointer;
      transition:color 0.9s;
    }
    .button-edit:hover{
      color:black;
    }
    .button-delete{
      background:#FF7D71;
      color:white;
      padding:10px 10px;
      margin:0 10px;
      border-radius:5px;
      cursor:pointer;
      transition:color 0.9s;
    }
    .button-delete:hover{
      color:black;
    }
  }
`

export const ContentMe = styled.div`
  padding:10px 10px;
  margin:0 50px;

  div{
    margin:30px 0;
    color:gray;
    padding:5px 0;
  }

  .content-your-confirmation{
    display:flex;
    align-items:center;
    
    h2{
      margin-right:15px;
    }
  }
`

export const ContentFriends = styled.div`
  padding:10px 10px;
  margin:0 50px;

  div{
    margin:30px 0;
    color:gray;
    padding:5px 0;
  }

  .content-friend-confirmation {
    display:flex;
    align-items:center;
    
    h2{
      margin-right:15px;
    }
  }
`